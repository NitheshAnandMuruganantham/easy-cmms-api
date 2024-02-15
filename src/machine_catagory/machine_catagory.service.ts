import { ForbiddenError } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  MachinesOrderByWithRelationInput,
  MachinesWhereInput,
} from 'src/machines/machines';

import {
  machine_catagory,
  machine_catagoryCreateInput,
  machine_catagoryCreateWithoutMachinesInput,
  machine_catagoryOrderByWithRelationAndSearchRelevanceInput,
  machine_catagoryUpdateInput,
  machine_catagoryUpdateOneWithoutMachinesNestedInput,
  machine_catagoryWhereInput,
} from 'src/machine_catagory/machine-catagory';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import SessionContainer from '../types/session';

@Injectable()
export class MachineCatagoriesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly caslFactory: CaslAbilityFactory,
  ) {}

  async create(
    session: SessionContainer,
    createSectionInput: machine_catagoryCreateWithoutMachinesInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('create', 'machineCatagory');
    return this.prisma.machine_catagory.create({
      data: {
        ...createSectionInput,
        block: {
          connect: {
            id: session.User.blockId,
          },
        },
      },
    });
  }

  async findAll(
    session: SessionContainer,
    where: machine_catagoryWhereInput,
    orderBy: machine_catagoryOrderByWithRelationAndSearchRelevanceInput,
    skip: number,
    take: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('read', 'machineCatagory');

    return this.prisma.machine_catagory.findMany({
      where,
      orderBy,
      skip,
      take,
    });
  }
  async count(
    session: SessionContainer,
    where: machine_catagoryWhereInput,
    orderBy: machine_catagoryOrderByWithRelationAndSearchRelevanceInput,
    skip: number,
    take: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('read', 'machineCatagory');

    return this.prisma.machine_catagory.count({
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

    ForbiddenError.from(ability).throwUnlessCan('read', 'machineCatagory');

    return this.prisma.machine_catagory.findUnique({ where: { id } });
  }

  async update(
    session: SessionContainer,
    id: number,
    updateSectionInput: machine_catagoryUpdateOneWithoutMachinesNestedInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('update', 'machineCatagory');

    return this.prisma.sections.update({
      where: { id },
      data: { ...updateSectionInput, block_id: session.User.blockId },
    });
  }

  async remove(session: SessionContainer, id: number) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('delete', 'machineCatagory');
    return this.prisma.machine_catagory.delete({ where: { id } });
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

    return this.prisma.machine_catagory.findUnique({ where: { id } }).machines({
      where: {
        AND: [accessibleBy(ability, 'read').Machines, where],
      },
      orderBy,
      skip,
      take,
      include: {
        machine_catagory: true,
        block: true,
        section: true,
      },
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
          { machine_catagory: { id: { equals: id } } },
        ],
      },
    });
    return {
      machines: dt,
    };
  }
}
