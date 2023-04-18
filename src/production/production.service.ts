import { ForbiddenError, subject } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CaslAbilityFactory } from 'src/casl/casl.ability';
import SessionContainer from '../types/session';
import humanizeDuration, * as humanize from 'humanize-duration';
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
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('create', 'ProductionData');

    return this.prisma.production_data.create({
      // @ts-ignore
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
    const ability = await this.casl.getCurrentUserAbility(session.Session);
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
    const ability = await this.casl.getCurrentUserAbility(session.Session);
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
    const canGet: any = await this.prisma.production_data.findUnique({
      where: { id },
      include: {
        updatedBy: true,
      },
    });

    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('ProductionData', canGet),
    );

    const Settings = await this.prisma.block_settings.findMany({
      where: {
        block_id: canGet.blockId,
        name: {
          in: [
            'REPORTING_TIME',
            'UNIT_ANNOTATIONS',
            'PRE_PROCESSING_CONFIG',
            'PRODUCTION_SETTINGS',
          ],
        },
      },
    });

    const unit_annotations: any = Settings.find(
      (setting) => setting.name === 'UNIT_ANNOTATIONS',
    );

    const production_settings = Settings.find(
      (setting) => setting.name === 'PRE_PROCESSING_CONFIG',
    );

    let settings: any = production_settings.value;
    let response = {};

    settings?.to_add_values.map((duration) => {
      response[duration] = 0;
    });

    settings?.to_add_values.map((key) => {
      const val =
        typeof canGet.production?.data[key] === 'string' &&
        canGet.production?.data[key].includes('.')
          ? parseFloat(canGet.production?.data[key])
          : parseInt(`${canGet.production?.data[key]}`);
      response[key] += val;
    });

    settings?.toHumanDuration.map((key) => {
      const val = humanize(response[key] * 60 * 1000, {
        units: ['h', 'm'],
        maxDecimalPoints: 0,
      });
      response[key] = val;
    });

    unit_annotations.value?.tons.map((d) => {
      response[d] = `${response[d]} Tons`;
    });

    return {
      ...canGet,
      production: {
        data: {
          ...canGet.production?.data,
          ...response,
        },
      },
    };
  }

  async update(
    session: SessionContainer,
    id: number,
    updateProductionInput: production_dataUpdateInput,
  ) {
    const canGet = await this.prisma.production_data.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
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
    const ability = await this.casl.getCurrentUserAbility(session.Session);
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
