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
} from 'src/@generated/machines';
import {
  Section,
  SectionCount,
  SectionCreateInput,
  SectionCreateWithoutMachinesInput,
  SectionOrderByWithRelationInput,
  SectionUpdateInput,
  SectionUpdateWithoutMachinesInput,
  SectionWhereInput,
} from 'src/@generated/section';
import { AuthGuard } from 'src/auth/auth.guard';
import { Session } from 'src/auth/session.decorator';
import SessionContainer from '../types/session';
import { SectionService } from './section.service';

@Resolver(() => Section)
export class SectionResolver {
  constructor(private readonly sectionService: SectionService) {}

  @Mutation(() => Section)
  createSection(
    @Session()
    session: SessionContainer,
    @Args('createSectionInput')
    createSectionInput: SectionCreateWithoutMachinesInput,
  ) {
    return this.sectionService.create(session, createSectionInput);
  }

  @Query(() => [Section], { name: 'sections' })
  findAll(
    @Session()
    session: SessionContainer,
    @Args('where', { nullable: true })
    where: SectionWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: SectionOrderByWithRelationInput,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number,
  ) {
    return this.sectionService.findAll(session, where, orderBy, skip, take);
  }

  @Query(() => Int, { name: 'sectionsCount' })
  count(
    @Session()
    session: SessionContainer,
    @Args('where', { nullable: true })
    where: SectionWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: SectionOrderByWithRelationInput,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number,
  ) {
    return this.sectionService.count(session, where, orderBy, skip, take);
  }

  @Query(() => Section, { name: 'section' })
  findOne(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.sectionService.findOne(session, id);
  }

  @Mutation(() => Section)
  updateSection(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('updateSectionInput')
    updateSectionInput: SectionUpdateWithoutMachinesInput,
  ) {
    return this.sectionService.update(session, id, updateSectionInput);
  }

  @Mutation(() => Section)
  removeSection(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.sectionService.remove(session, id);
  }

  @ResolveField(() => [Machines])
  machines(
    @Session()
    session: SessionContainer,
    @Parent() { id }: Section,
    @Args('where', { nullable: true })
    where: MachinesWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: MachinesOrderByWithRelationInput,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number,
  ) {
    return this.sectionService.machines(
      session,
      id,
      where,
      orderBy,
      skip,
      take,
    );
  }

  @ResolveField(() => Int, { name: 'id' })
  id(
    @Parent()
    { id }: Section,
  ) {
    return `${id}`;
  }
  @ResolveField(() => SectionCount, { name: '_count' })
  machinesCount(
    @Session()
    session: SessionContainer,
    @Parent() block: Section,
  ) {
    return this.sectionService.machinesCount(session, block.id);
  }
}
