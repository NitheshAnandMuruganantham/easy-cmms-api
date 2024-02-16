import { ForbiddenError, subject } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import {
  ReportsCreateInput,
  ReportsOrderByWithRelationInput,
  ReportsUpdateInput,
  ReportsWhereInput,
} from 'src/report/reports';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

interface SessionContainer {
  userId: number;
  userRole: string;
}

@Injectable()
export class ReportService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly caslFactory: CaslAbilityFactory,
  ) {}
  async create(
    session: SessionContainer,
    createReportInput: ReportsCreateInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('create', 'Reports');

    return this.prisma.reports.create({
      // @ts-ignore
      data: createReportInput,
    });
  }

  async findAll(
    session: SessionContainer,
    where: ReportsWhereInput,
    orderBy: ReportsOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('read', 'Reports');

    return this.prisma.reports.findMany({
      where: {
        AND: [accessibleBy(ability).Reports, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const toRead = await this.prisma.reports.findUnique({
      where: { id },
    });

    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Reports', toRead),
    );

    return toRead;
  }

  async update(
    session: SessionContainer,
    id: number,
    updateReportInput: ReportsUpdateInput,
  ) {
    const toUpdate = await this.prisma.reports.findUnique({
      where: { id },
    });

    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('Reports', toUpdate),
    );

    return this.prisma.reports.update({
      where: { id },
      // @ts-ignore
      data: updateReportInput,
    });
  }

  async remove(session: SessionContainer, id: number) {
    const toDelete = await this.prisma.reports.findUnique({
      where: { id },
    });

    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Reports', toDelete),
    );

    return this.prisma.reports.delete({
      where: { id },
    });
  }

  async maintenance(session: SessionContainer, id: bigint) {
    const toGet = await this.prisma.maintenance.findUnique({
      where: { id },
    });

    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Maintenance', toGet),
    );

    return toGet;
  }
}
