import { ForbiddenError, subject } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  ItemCatagoryCreateInput,
  ItemCatagoryOrderByWithAggregationInput,
  ItemCatagoryUpdateInput,
  ItemCatagoryWhereInput,
} from 'src/item-catagory/item-catagory';
import {
  ItemsOrderByWithAggregationInput,
  ItemsWhereInput,
} from 'src/items/items';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import SessionContainer from '../types/session';

@Injectable()
export class ItemCatagoryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly casl: CaslAbilityFactory,
  ) {}

  async create(
    session: SessionContainer,
    createItemCatagoryInput: ItemCatagoryCreateInput,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('create', 'catagory');
    return this.prisma.catagory.create({
      // @ts-ignore
      data: { ...createItemCatagoryInput, block_id: session.User.blockId },
    });
  }

  async findAll(
    session: SessionContainer,
    where: ItemCatagoryWhereInput,
    orderBy: ItemCatagoryOrderByWithAggregationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'catagory');

    return this.prisma.catagory.findMany({
      where: {
        AND: [accessibleBy(ability).catagory, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }
  async count(
    session: SessionContainer,
    where: ItemCatagoryWhereInput,
    orderBy: ItemCatagoryOrderByWithAggregationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'catagory');

    return this.prisma.catagory.count({
      where: {
        AND: [accessibleBy(ability).catagory, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const canGet = await this.prisma.catagory.findUnique({ where: { id } });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('catagory', canGet),
    );
    return canGet;
  }

  async update(
    session: SessionContainer,
    id: number,
    updateItemCatagoryInput: ItemCatagoryUpdateInput,
  ) {
    const canUpdate = await this.prisma.catagory.findUnique({ where: { id } });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('catagory', canUpdate),
    );

    return this.prisma.catagory.update({
      where: { id },
      // @ts-ignore
      data: { ...updateItemCatagoryInput, block_id: session.User.blockId },
    });
  }

  async remove(session: SessionContainer, id: number) {
    const canDelete = await this.prisma.catagory.findUnique({ where: { id } });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('catagory', canDelete),
    );
    return this.prisma.catagory.delete({ where: { id } });
  }

  async items(
    session: SessionContainer,
    parentId: bigint,
    where: ItemsWhereInput,
    orderBy: ItemsOrderByWithAggregationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Items');

    return this.prisma.catagory
      .findUnique({
        where: { id: parentId },
      })
      .items({
        where: {
          AND: [accessibleBy(ability).Items, where],
        },
        orderBy,
        take: limit,
        skip: offset,
      });
  }

  async countItems(session: SessionContainer, parentId: bigint) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    const count = await this.prisma.items.count({
      where: {
        AND: [accessibleBy(ability).Items, { catagory_id: parentId }],
      },
    });

    return { items: count };
  }
}
