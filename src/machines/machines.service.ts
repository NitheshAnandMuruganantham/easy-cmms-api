import { ForbiddenError, subject } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  MachinesCreateInput,
  MachinesOrderByWithRelationInput,
  MachinesUpdateInput,
  MachinesWhereInput,
} from 'src/@generated/machines';

import {
  MaintenanceWhereInput,
  MaintenanceOrderByWithRelationInput,
} from 'src/@generated/maintenance';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Injectable()
export class MachinesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly casl: CaslAbilityFactory,
  ) {}

  async create(
    session: SessionContainer,
    createMachineInput: MachinesCreateInput,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('create', 'Machines');
    return this.prisma.machines.create({
      data: createMachineInput,
      include: {
        machine_catagory: true,
        block: true,
        section: true,
      },
    });
  }

  async findAll(
    session: SessionContainer,
    where: MachinesWhereInput,
    orderBy: MachinesOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Machines');

    return this.prisma.machines.findMany({
      where: { AND: [where, accessibleBy(ability).Machines] },
      orderBy,
      take: limit,
      skip: offset,
      include: {
        machine_catagory: true,
        block: true,
        section: true,
      },
    });
  }

  async count(
    session: SessionContainer,
    where: MachinesWhereInput,
    orderBy: MachinesOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Machines');
    return this.prisma.machines.count({
      where: { AND: [where, accessibleBy(ability).Machines] },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const ability = await this.casl.getCurrentUserAbility(session);
    const canget = await this.prisma.machines.findUnique({
      where: { id },
      include: {
        machine_catagory: true,
        block: true,
        section: true,
      },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Machines', canget),
    );

    return canget;
  }

  async update(
    session: SessionContainer,
    id: number,
    updateMachineInput: MachinesUpdateInput,
  ) {
    const canUpdate = await this.prisma.machines.findUnique({ where: { id } });

    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('Machines', canUpdate),
    );
    return this.prisma.machines.update({
      where: { id },
      data: updateMachineInput,
      include: {
        machine_catagory: true,
        block: true,
        section: true,
      },
    });
  }

  async remove(session: SessionContainer, id: number) {
    const canDelete = await this.prisma.machines.findUnique({ where: { id } });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Machines', canDelete),
    );
    return this.prisma.machines.delete({
      where: { id },
      include: {
        machine_catagory: true,
        block: true,
        section: true,
      },
    });
  }

  async maintenance(
    session: SessionContainer,
    id: bigint,
    where: MaintenanceWhereInput,
    orderBy: MaintenanceOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Maintenance');
    this.prisma.machines.findUnique({ where: { id } }).maintenance({
      where: {
        AND: [accessibleBy(ability).Maintenance, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }
}
