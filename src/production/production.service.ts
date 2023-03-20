import { ForbiddenError, subject } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { accessibleBy } from '@casl/prisma';
import {
  production_dataCreateInput,
  production_dataOrderByWithAggregationInput,
  production_dataUpdateInput,
  production_dataWhereInput,
} from 'src/@generated/production-data';

@Injectable()
export class ProductionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly casl: CaslAbilityFactory,
  ) {}
  async create(
    session: SessionContainer,
    createBlockInput: production_dataCreateInput,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('create', 'ProductionData');

    return this.prisma.production_data.create({
      data: createBlockInput,
    });
  }

  async findAll(
    session: SessionContainer,
    where: production_dataWhereInput,
    orderBy: production_dataOrderByWithAggregationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'ProductionData');
    return this.prisma.production_data.findMany({
      where: {
        AND: [where],
      },
      orderBy,
      take: limit,
      skip: offset,
      include: {
        updatedBy: true,
      },
    });
  }

  async count(
    session: SessionContainer,
    where: production_dataWhereInput,
    orderBy: production_dataOrderByWithAggregationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'ProductionData');
    return this.prisma.production_data.count({
      where: {
        AND: [where],
      },

      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const canGet = await this.prisma.production_data.findUnique({
      where: { id },
      include: {
        updatedBy: true,
      },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('ProductionData', canGet),
    );
    return canGet;
  }

  async update(
    session: SessionContainer,
    id: number,
    updateProductionInput: production_dataUpdateInput,
  ) {
    const canGet = await this.prisma.production_data.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('ProductionData', canGet),
    );
    return this.prisma.production_data.update({
      where: { id },
      // @ts-ignore
      data: updateProductionInput,
      include: {
        updatedBy: true,
      },
    });
  }

  async remove(session: SessionContainer, id: number) {
    const canGet = await this.prisma.production_data.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('ProductionData', canGet),
    );

    return this.prisma.production_data.delete({
      where: { id },
      include: {
        updatedBy: true,
      },
    });
  }
}
