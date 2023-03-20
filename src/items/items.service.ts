import { ForbiddenError, subject } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { accessibleBy } from '@casl/prisma';

import {
  ItemsCreateInput,
  ItemsOrderByWithRelationInput,
  ItemsUpdateInput,
  ItemsWhereInput,
} from 'src/@generated/items';
import {
  ReplacementsOrderByWithRelationInput,
  ReplacementsWhereInput,
} from 'src/@generated/replacements';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Injectable()
export class ItemsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly casl: CaslAbilityFactory,
  ) {}

  async create(session: SessionContainer, createItemInput: ItemsCreateInput) {
    const ability = await this.casl.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('create', 'Items');

    return this.prisma.items.create({
      data: createItemInput,
    });
  }

  async findAll(
    session: SessionContainer,
    where: ItemsWhereInput,
    orderBy: ItemsOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('create', 'Items');

    return this.prisma.items.findMany({
      where: {
        AND: [accessibleBy(ability).Items, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const canGet = await this.prisma.items.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Items', canGet),
    );
    return canGet;
  }
  async update(
    session: SessionContainer,
    id: number,
    updateItemInput: ItemsUpdateInput,
  ) {
    const canUpdate = await this.prisma.items.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('Items', canUpdate),
    );

    return this.prisma.items.update({
      where: { id },
      // @ts-ignore
      data: updateItemInput,
    });
  }

  async remove(session: SessionContainer, id: number) {
    const canRemove = await this.prisma.items.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Items', canRemove),
    );
    return this.prisma.items.delete({
      where: { id },
    });
  }

  catagory(session: SessionContainer, id: bigint) {
    return this.prisma.items.findUnique({ where: { id } }).catagory();
  }

  async replacements(
    session: SessionContainer,
    id: bigint,
    where: ReplacementsWhereInput,
    orderBy: ReplacementsOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Replacements');

    return this.prisma.items.findUnique({ where: { id } }).replacements({
      where: {
        AND: [accessibleBy(ability).Replacements, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }
}
