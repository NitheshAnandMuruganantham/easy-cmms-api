import { UseGuards } from '@nestjs/common/decorators';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {
  Machines,
  MachinesOrderByWithRelationInput,
  MachinesWhereInput,
} from 'src/machines/dto/machines';
import { Section } from 'src/section/dto/section';
import { Session } from 'src/auth/session.decorator';
import SessionContainer from '../types/session';
import { MachineCatagoriesService } from './machine_catagory.service';
import {
  machine_catagory,
  machine_catagoryCreateWithoutMachinesInput,
  machine_catagoryOrderByWithRelationAndSearchRelevanceInput,
  machine_catagoryUpdateOneWithoutMachinesNestedInput,
  machine_catagoryWhereInput,
} from 'src/machine_catagory/dto';
import { Machine_catagoryCount } from 'src/common-dto/prisma';

@Resolver(() => machine_catagory)
export class MachineCatagoriesResolver {
  constructor(
    private readonly machineCatagoriesService: MachineCatagoriesService,
  ) {}

  @Mutation(() => machine_catagory)
  createMachineCategory(
    @Session()
    session: SessionContainer,
    @Args('createCategoryInput')
    createCategoryInput: machine_catagoryCreateWithoutMachinesInput,
  ) {
    return this.machineCatagoriesService.create(session, createCategoryInput);
  }

  @Query(() => [machine_catagory], { name: 'machineCatagories' })
  findAll(
    @Session()
    session: SessionContainer,
    @Args('where', { nullable: true })
    where: machine_catagoryWhereInput = {},
    @Args('orderBy', { nullable: true })
    orderBy: machine_catagoryOrderByWithRelationAndSearchRelevanceInput,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number,
  ) {
    return this.machineCatagoriesService.findAll(
      session,
      where,
      orderBy,
      skip,
      take,
    );
  }

  @Query(() => Int, { name: 'machineCatagoriesCount' })
  count(
    @Session()
    session: SessionContainer,
    @Args('where', { nullable: true })
    where: machine_catagoryWhereInput = {},
    @Args('orderBy', { nullable: true })
    orderBy: machine_catagoryOrderByWithRelationAndSearchRelevanceInput,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number,
  ) {
    return this.machineCatagoriesService.count(
      session,
      where,
      orderBy,
      skip,
      take,
    );
  }

  @Query(() => machine_catagory, { name: 'machineCategory' })
  findOne(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.machineCatagoriesService.findOne(session, id);
  }

  @Mutation(() => machine_catagory)
  updateMachineCatagories(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('data')
    updateSectionInput: machine_catagoryUpdateOneWithoutMachinesNestedInput,
  ) {
    return this.machineCatagoriesService.update(
      session,
      id,
      updateSectionInput,
    );
  }

  @Mutation(() => machine_catagory)
  removeMachineCatagories(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.machineCatagoriesService.remove(session, id);
  }

  @ResolveField(() => [Machines])
  machines(
    @Session()
    session: SessionContainer,
    @Parent() { id }: Section,
    @Args('where', { nullable: true })
    where: MachinesWhereInput = {},
    @Args('orderBy', { nullable: true })
    orderBy: MachinesOrderByWithRelationInput,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number,
  ) {
    return this.machineCatagoriesService.machines(
      session,
      id,
      where,
      orderBy,
      skip,
      take,
    );
  }
  @ResolveField(() => Machine_catagoryCount, { name: '_count' })
  machinesCount(
    @Session()
    session: SessionContainer,
    @Parent() block: machine_catagory,
  ) {
    return this.machineCatagoriesService.machinesCount(session, block.id);
  }
}
