import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Machines } from 'src/@generated/machines';
import {
  routine_maintanances,
  routine_maintanancesCreateInput,
  routine_maintanancesSumOrderByAggregateInput,
  routine_maintanancesUpdateInput,
  routine_maintanancesWhereInput,
} from 'src/@generated/routine-maintanances';
import { Users } from 'src/@generated/users';
import { Session } from 'src/auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { RoutineMaintanancesService } from './routine-maintanances.service';

@Resolver(() => routine_maintanances)
export class RoutineMaintanancesResolver {
  constructor(
    private readonly routineMaintanancesService: RoutineMaintanancesService,
  ) {}

  @Mutation(() => routine_maintanances)
  createRoutineMaintanance(
    @Session()
    session: SessionContainer,
    @Args('createRoutineMaintananceInput')
    createRoutineMaintananceInput: routine_maintanancesCreateInput,
  ) {
    return this.routineMaintanancesService.create(
      session,
      createRoutineMaintananceInput,
    );
  }

  @Query(() => [routine_maintanances], { name: 'routineMaintanances' })
  findAll(
    @Session()
    session: SessionContainer,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Args('where', { nullable: true }) where: routine_maintanancesWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: routine_maintanancesSumOrderByAggregateInput,
  ) {
    return this.routineMaintanancesService.findAll(
      session,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @Query(() => Int, { name: 'routineMaintanancesCount' })
  count(
    @Session()
    session: SessionContainer,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Args('where', { nullable: true }) where: routine_maintanancesWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: routine_maintanancesSumOrderByAggregateInput,
  ) {
    return this.routineMaintanancesService.count(
      session,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @Query(() => routine_maintanances, { name: 'routineMaintanance' })
  findOne(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.routineMaintanancesService.findOne(session, id);
  }

  @Mutation(() => routine_maintanances)
  updateRoutineMaintanance(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('updateRoutineMaintananceInput')
    updateRoutineMaintananceInput: routine_maintanancesUpdateInput,
  ) {
    return this.routineMaintanancesService.update(
      session,
      id,
      updateRoutineMaintananceInput,
    );
  }

  @Mutation(() => routine_maintanances)
  removeRoutineMaintanance(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.routineMaintanancesService.remove(session, id);
  }

  @ResolveField(() => Users, { name: 'assignee' })
  assignee(
    @Session()
    session: SessionContainer,
    @Parent() routineMaintanance: routine_maintanances,
  ) {
    return this.routineMaintanancesService.assignee(
      session,
      routineMaintanance.id,
    );
  }
}
