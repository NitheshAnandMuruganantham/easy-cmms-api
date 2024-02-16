import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import {
  Maintenance,
  MaintenanceOrderByWithRelationInput,
  MaintenanceWhereInput,
} from 'src/maintanance/dto';
import {
  Ticket,
  TicketOrderByWithRelationInput,
  TicketWhereInput,
} from 'src/ticket/dto';
import {
  Users,
  UsersCreateInput,
  UsersOrderByWithRelationInput,
  UsersUpdateInput,
  UsersWhereInput,
} from 'src/users/dto';
import { Session } from 'src/auth/session.decorator';
import SessionContainer from '../types/session';
import { UsersService } from './users.service';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => Users)
  createUser(
    @Args('createUserInput') createUserInput: UsersCreateInput,
    @Session() session: SessionContainer,
  ) {
    return this.usersService.create(session, createUserInput);
  }

  @Query(() => [Users], { name: 'users' })
  findAll(
    @Args('where', { nullable: true }) where: UsersWhereInput = {},
    @Args('orderBy', { nullable: true }) orderBy: UsersOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Session() session: SessionContainer,
  ) {
    return this.usersService.findAll(session, where, orderBy, limit, offset);
  }

  @Query(() => Int, { name: 'usersCount' })
  count(
    @Args('where', { nullable: true }) where: UsersWhereInput = {},
    @Args('orderBy', { nullable: true }) orderBy: UsersOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Session() session: SessionContainer,
  ) {
    return this.usersService.count(session, where, orderBy, limit, offset);
  }

  @Query(() => Users, { name: 'user' })
  findOne(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int })
    id: number,
  ) {
    return this.usersService.findOne(session, id);
  }

  @Mutation(() => Users)
  updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateUserInput') updateUserInput: UsersUpdateInput,
    @Session() session: SessionContainer,
  ) {
    return this.usersService.update(session, id, updateUserInput);
  }

  @Mutation(() => Users)
  removeUser(
    @Args('id', { type: () => Int }) id: number,
    @Session() session: SessionContainer,
  ) {
    return this.usersService.remove(session, id);
  }

  @ResolveField(() => [Maintenance])
  maintenance(
    @Parent() user: Users,
    @Args('where', { nullable: true }) where: MaintenanceWhereInput = {},
    @Args('orderBy', { nullable: true })
    orderBy: MaintenanceOrderByWithRelationInput,
    @Session() session: SessionContainer,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.usersService.maintenance(
      session,
      user.id,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @ResolveField(() => [Ticket])
  ticket(
    @Parent() user: Users,
    @Args('where', { nullable: true }) where: TicketWhereInput = {},
    @Args('orderBy', { nullable: true })
    orderBy: TicketOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Session() session: SessionContainer,
  ) {
    return this.usersService.ticket(
      session,
      user.id,
      where,
      orderBy,
      limit,
      offset,
    );
  }
}
