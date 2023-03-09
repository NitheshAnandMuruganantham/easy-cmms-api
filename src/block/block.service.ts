import { ForbiddenError, subject } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  BlockCreateInput,
  BlockOrderByWithAggregationInput,
  BlockUpdateInput,
  BlockWhereInput,
} from 'src/@generated/block';

import {
  MachinesOrderByWithAggregationInput,
  MachinesWhereInput,
} from 'src/@generated/machines';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class BlockService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly casl: CaslAbilityFactory,
  ) {}
  async create(session: SessionContainer, createBlockInput: BlockCreateInput) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('create', 'Block');
    console.log('createBlockInput', createBlockInput);
    
    return this.prisma.block.create({
      data: createBlockInput,
    });
  }

  async findAll(
    session: SessionContainer,
    where: BlockWhereInput,
    orderBy: BlockOrderByWithAggregationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Block');
    return this.prisma.block.findMany({
      where: {
        AND: [accessibleBy(ability).Block, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async count(
    session: SessionContainer,
    where: BlockWhereInput,
    orderBy: BlockOrderByWithAggregationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Block');
    return this.prisma.block.count({
      where: {
        AND: [accessibleBy(ability).Block, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const canGet = await this.prisma.block.findUnique({ where: { id } });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Block', canGet),
    );
    return canGet;
  }

  async update(
    session: SessionContainer,
    id: number,
    updateBlockInput: BlockUpdateInput,
  ) {
    const canGet = await this.prisma.block.findUnique({ where: { id } });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('Block', canGet),
    );
    return this.prisma.block.update({
      where: { id },
      data: updateBlockInput,
    });
  }

  async remove(session: SessionContainer, id: number) {
    const canGet = await this.prisma.block.findUnique({ where: { id } });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Block', canGet),
    );

    return this.prisma.block.delete({
      where: { id },
    });
  }

  async machines(
    session: SessionContainer,
    block_id: bigint,
    where?: MachinesWhereInput,
    orderBy?: MachinesOrderByWithAggregationInput,
    limit?: number,
    offset?: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Machines');

    return this.prisma.block
      .findUnique({
        where: { id: block_id },
      })
      .machines({
        where: {
          AND: [accessibleBy(ability).Machines, where],
        },
        orderBy,
        take: limit,
        skip: offset,
      });
  }

  async machinesCount(session: SessionContainer, id: bigint) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Machines');

    const dt = this.prisma.machines.count({
      where: {
        AND: [accessibleBy(ability).Machines, { block_id: id }],
      },
    });
    return {
      machines: dt,
    };
  }
}
