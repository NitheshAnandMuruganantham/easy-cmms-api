import { ForbiddenError } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  MachinesOrderByWithRelationInput,
  MachinesWhereInput,
} from 'src/@generated/machines';

import {
  SectionCreateWithoutMachinesInput,
  SectionOrderByWithRelationInput,
  SectionUpdateWithoutMachinesInput,
  SectionWhereInput,
} from 'src/@generated/section';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import SessionContainer from '../types/session';

@Injectable()
export class SectionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly caslFactory: CaslAbilityFactory,
  ) {}

  async create(
    session: SessionContainer,
    createSectionInput: SectionCreateWithoutMachinesInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('create', 'Section');
    return this.prisma.sections.create({
      data: {
        ...createSectionInput,
        block_id: session.User.blockId,
      },
    });
  }

  async findAll(
    session: SessionContainer,
    where: SectionWhereInput,
    orderBy: SectionOrderByWithRelationInput,
    skip: number,
    take: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('read', 'Section');

    return this.prisma.sections.findMany({
      where,
      orderBy,
      skip,
      take,
    });
  }

  async count(
    session: SessionContainer,
    where: SectionWhereInput,
    orderBy: SectionOrderByWithRelationInput,
    skip: number,
    take: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('read', 'Section');

    return this.prisma.sections.count({
      where,
      orderBy,
      skip,
      take,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('read', 'Section');

    return this.prisma.sections.findUnique({ where: { id } });
  }

  async update(
    session: SessionContainer,
    id: number,
    updateSectionInput: SectionUpdateWithoutMachinesInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('update', 'Section');

    return this.prisma.sections.update({
      where: { id },
      data: updateSectionInput,
    });
  }

  async remove(session: SessionContainer, id: number) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('delete', 'Section');
    return this.prisma.sections.delete({ where: { id } });
  }

  async machines(
    session: SessionContainer,
    id: bigint,
    where: MachinesWhereInput,
    orderBy: MachinesOrderByWithRelationInput,
    skip: number,
    take: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('read', 'Machines');

    return this.prisma.machines.findMany({
      where: {
        AND: [
          accessibleBy(ability, 'read').Machines,
          where,
          {
            section_id: { equals: id },
          },
        ],
      },
      orderBy,
      skip,
      take,
    });
  }

  async machinesCount(session: SessionContainer, id: bigint) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );
    ForbiddenError.from(ability).throwUnlessCan('read', 'Machines');
    const dt = this.prisma.machines.count({
      where: {
        AND: [
          accessibleBy(ability).Machines,
          { section: { id: { equals: id } } },
        ],
      },
    });
    return {
      machines: dt,
    };
  }
}
