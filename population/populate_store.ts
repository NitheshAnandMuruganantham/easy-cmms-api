require('json-bigint-patch');
import { PrismaClient } from '@prisma/client';
import * as csv from 'csv-parser';
import * as fs from 'fs';
import data from './store_data';

// This script is used to populate the database with the store from the store.csv file.
// The script is run by the command: yarn populate-machines

const block_id = 1; // This is the id of the block that the machines are in. This will need to be changed for each block.

var results = [];
const prisma = new PrismaClient();

const getUniqueCategories = async (data) => {
  const categories = [];
  data.forEach((row) => {
    if (!categories.includes(row.category)) {
      categories.push(row.category);
    }
  });
  return categories;
};

const populateCategories = async (categories) => {
  categories.forEach(async (category) => {
    await prisma.catagory.create({
      data: {
        name: category,
        block_id,
      },
    });
  });
};

const catagoryNameVsId = async () => {
  const categories = await prisma.catagory.findMany({
    where: {
      block_id: {
        equals: block_id,
      },
    },
  });

  const categoryMap = {};

  categories.forEach((category) => {
    categoryMap[category.name] = category.id;
  });

  return categoryMap;
};

const populateItems = async (data, categoriesMap) => {
  await data.map(async (row) => {
    let unit_price = 0.0;

    try {
      unit_price = parseFloat(`${row.value}`) / parseFloat(`${row.stock}`);
      if (isNaN(unit_price)) {
        unit_price = 0.0;
      }
    } catch {}

    if (categoriesMap[row.category]) {
      await prisma.items.create({
        data: {
          name: row.name,
          catagory: {
            connect: {
              id: parseInt(`${categoriesMap[row.category]}`),
            },
          },

          created_at: new Date(),
          updated_at: new Date(),
          block: {
            connect: {
              id: block_id,
            },
          },
          code: row.code,
          quantity: row.stock,
          unit_price: unit_price,
        },
      });
    }
  });
};

getUniqueCategories(data).then((categories) => {
  populateCategories(categories).then(() => {
    catagoryNameVsId().then((categoriesMap) => {
      populateItems(data, categoriesMap);
    });
  });
});
