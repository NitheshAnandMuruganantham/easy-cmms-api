import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TicketService } from './ticket.service';
import {
  Ticket,
  TicketCreateInput,
  TicketOrderByWithRelationInput,
  TicketUpdateInput,
  TicketWhereInput,
} from 'src/@generated/ticket';
import { Users } from 'src/@generated/users';
import { Maintenance } from 'src/@generated/maintenance';
import { Machines } from 'src/@generated/machines';
import { Session } from 'src/auth/session.decorator';
import SessionContainer from '../types/session';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Ticket)
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  @Mutation(() => Ticket)
  createTicket(
    @Args('createTicketInput') createTicketInput: TicketCreateInput,
    @Session() session: SessionContainer,
  ) {
    return this.ticketService.create(session, {
      ...createTicketInput,
      user: {
        connect: {
          id: session.User.id,
        },
      },
    });
  }

  @Query(() => Int, { name: 'ticketsCount' })
  count(
    @Args('where', { nullable: true }) where: TicketWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: TicketOrderByWithRelationInput,
    @Args('skip', { nullable: true }) skip: number,
    @Args('take', { nullable: true }) take: number,
    @Session() session: SessionContainer,
  ) {
    return this.ticketService.count(session, where, orderBy, skip, take);
  }

  @Query(() => [Ticket], { name: 'tickets' })
  findAll(
    @Args('where', { nullable: true }) where: TicketWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: TicketOrderByWithRelationInput,
    @Args('skip', { nullable: true }) skip: number,
    @Args('take', { nullable: true }) take: number,
    @Session() session: SessionContainer,
  ) {
    return this.ticketService.findAll(session, where, orderBy, skip, take);
  }

  @Query(() => Ticket, { name: 'ticket' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Session() session: SessionContainer,
  ) {
    return this.ticketService.findOne(session, id);
  }

  @Mutation(() => Ticket)
  updateTicket(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateTicketInput') updateTicketInput: TicketUpdateInput,
    @Session() session: SessionContainer,
  ) {
    return this.ticketService.update(session, id, updateTicketInput);
  }

  @Mutation(() => Ticket)
  removeTicket(
    @Args('id', { type: () => Int }) id: number,
    @Session() session: SessionContainer,
  ) {
    return this.ticketService.remove(session, id);
  }

  @ResolveField(() => Users, { name: 'user' })
  user(@Parent() { user_id }: Ticket, @Session() session: SessionContainer) {
    return this.ticketService.user(session, user_id);
  }

  @ResolveField(() => Maintenance, { nullable: true })
  maintanance(
    @Parent() { maintenance_id }: Ticket,
    @Session() session: SessionContainer,
  ) {
    return this.ticketService.maintanance(session, maintenance_id);
  }

  @ResolveField(() => Machines)
  machine(@Parent() { machines }: Ticket) {
    return machines;
  }
}
