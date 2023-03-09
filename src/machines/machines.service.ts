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
    return this.prisma.machines.create({ data: createMachineInput });
  }

  async findAll(
    session: SessionContainer,
    where: MachinesWhereInput,
    orderBy: MachinesOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {


    return this.prisma.machines.findMany({
      where: where,
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async count(
    session: SessionContainer,
    where: MachinesWhereInput,
    orderBy: MachinesOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {

    return this.prisma.machines.count({
      where,
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const canget = await this.prisma.machines.findUnique({ where: { id } });

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
    });
  }

  async remove(session: SessionContainer, id: number) {
    const canDelete = await this.prisma.machines.findUnique({ where: { id } });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Machines', canDelete),
    );
    return this.prisma.machines.delete({ where: { id } });
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

  async section(session: SessionContainer, id: bigint) {
    return this.prisma.machines.findUnique({ where: { id } }).section();
  }

  async block(session: SessionContainer, id: bigint) {
    return this.prisma.machines.findUnique({ where: { id } }).block();
  }

  async machine_catagory(session: SessionContainer, id: bigint) {
   return this.prisma.machines.findUnique({ where: { id } }).machine_catagory();
  }
}
