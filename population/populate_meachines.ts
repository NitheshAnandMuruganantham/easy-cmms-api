// require('json-bigint-patch');
// import { PrismaClient } from '@prisma/client';
// import * as csv from 'csv-parser';
// import * as fs from 'fs';

// // This script is used to populate the database with the machines from the machines.csv file.
// // The script is run by the command: yarn populate-machines

// const block_id = 1; // This is the id of the block that the machines are in. This will need to be changed for each block.

// var results = [];
// const prisma = new PrismaClient();
// const getUniqueSections = (data) => {
//   const sections = [];
//   data.forEach((row) => {
//     if (!sections.includes(row.section)) {
//       sections.push(row.section);
//     }
//   });
//   return sections;
// };

// const getUniqueCategories = (data) => {
//   const categories = [];
//   data.forEach((row) => {
//     if (!categories.includes(row.category)) {
//       categories.push(row.category);
//     }
//   });
//   return categories;
// };

// const populateSections = async (sections) => {
//   sections.forEach(async (section) => {
//     await prisma.sections.create({
//       data: {
//         name: section,
//       },
//     });
//   });
// };

// const populateCategories = async (categories) => {
//   categories.forEach(async (category) => {
//     await prisma.machine_catagory.create({
//       data: {
//         name: category,
//       },
//     });
//   });
// };

// const catagoryNameVsId = async () => {
//   const categories = await prisma.machine_catagory.findMany();
//   const categoryMap = {};
//   categories.forEach((category) => {
//     categoryMap[category.name] = category.id;
//   });
//   return categoryMap;
// };

// const SectionNameVsId = async () => {
//   const sections = await prisma.sections.findMany();
//   const sectionMap = {};
//   sections.forEach((section) => {
//     sectionMap[section.name] = section.id;
//   });
//   return sectionMap;
// };

// const populateMachines = async (data, sectionMap, categoriesMap) => {
//   data.forEach(async (row) => {
//     if (categoriesMap[row.category] && sectionMap[row.section]) {
//       console.log(row);
//       await prisma.machines.create({
//         data: {
//           name: row.machine,
//           machine_catagory: {
//             connect: {
//               id: categoriesMap[row.category],
//             },
//           },
//           section: {
//             connect: {
//               id: sectionMap[row.section],
//             },
//           },
//           created_at: new Date(),
//           updated_at: new Date(),
//           block: {
//             connect: {
//               id: block_id,
//             },
//           },
//           priority: 1,
//           profile: {},
//           label: row.machine,
//         },
//       });
//     }
//   });
// };

// (async () => {
//   fs.createReadStream('population/machines.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', async () => {
//       // const uniqueSections = getUniqueSections(results);
//       // console.log("generating unique sections");
//       // const uniqueCategories = getUniqueCategories(results);
//       // console.log("generating unique categories");

//       // populateCategories(uniqueCategories);
//       // console.log("populating categories");
//       // populateSections(uniqueSections);
//       // console.log("populating sections");
//       const sectionMap = await SectionNameVsId();
//       const categoriesMap = await catagoryNameVsId();
//       console.log(sectionMap);
//       // console.log("generating maps");
//       populateMachines(results, sectionMap, categoriesMap);
//     });
// })();
