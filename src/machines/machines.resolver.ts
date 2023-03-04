import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Block } from 'src/@generated/block';
import {
  Machines,
  MachinesCreateInput,
  MachinesOrderByWithRelationInput,
  MachinesUpdateInput,
  MachinesWhereInput,
} from 'src/@generated/machines';
import {
  Maintenance,
  MaintenanceWhereInput,
  MaintenanceOrderByWithRelationInput,
} from 'src/@generated/maintenance';
import { Sections } from 'src/@generated/sections';
import { AuthGuard } from 'src/auth/auth.guard';
import { Session } from 'src/auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { MachinesService } from './machines.service';

@Resolver(() => Machines)
export class MachinesResolver {
  constructor(private readonly machinesService: MachinesService) {}

  @Mutation(() => Machines)
  createMachine(
    @Session() session: SessionContainer,
    @Args('createMachineInput') createMachineInput: MachinesCreateInput,
  ) {
    return this.machinesService.create(session, createMachineInput);
  }

  @Query(() => [Machines], { name: 'machines' })
  findAll(
    @Session() session: SessionContainer,
    @Args('where', { nullable: true }) where: MachinesWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: MachinesOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.machinesService.findAll(session, where, orderBy, limit, offset);
  }

  @Query(() => Int, { name: 'machinesCount' })
  count(
    @Session() session: SessionContainer,
    @Args('where', { nullable: true }) where: MachinesWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: MachinesOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.machinesService.count(session, where, orderBy, limit, offset);
  }

  @Query(() => Machines, { name: 'machine' })
  findOne(
    @Session() session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.machinesService.findOne(session, id);
  }

  @Mutation(() => Machines)
  updateMachine(
    @Session() session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('updateMachineInput') updateMachineInput: MachinesUpdateInput,
  ) {
    return this.machinesService.update(session, id, updateMachineInput);
  }

  @Mutation(() => Machines)
  removeMachine(
    @Session() session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.machinesService.remove(session, id);
  }

  @ResolveField(() => [Maintenance], { nullable: true })
  maintenance(
    @Session() session: SessionContainer,
    @Parent() { id }: Machines,
    @Args('where', { nullable: true }) where: MaintenanceWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: MaintenanceOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.machinesService.maintenance(
      session,
      id,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @ResolveField(() => Block)
  block(
    @Session() session: SessionContainer,
    @Parent() { block_id }: Machines,
  ) {
    return this.machinesService.block(session, block_id);
  }

  @ResolveField(() => Sections)
  section(
    @Session() session: SessionContainer,
    @Parent() { section_id }: Machines,
  ) {
    return this.machinesService.section(session, section_id);
  }
}
