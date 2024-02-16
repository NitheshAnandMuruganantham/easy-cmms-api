import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { MaintenanceService } from './maintanance.service';
import {
  Maintenance,
  MaintenanceCreateInput,
  MaintenanceOrderByWithRelationInput,
  MaintenanceUpdateInput,
  MaintenanceWhereInput,
} from 'src/maintanance/maintenance';
import { Users } from 'src/users/users';
import { Machines } from 'src/machines/machines';
import { Replacements } from 'src/replacements/replacements';
import { Reports } from 'src/report/reports';
import { Ticket } from 'src/ticket/ticket';
import { Session } from 'src/auth/session.decorator';
import SessionContainer from '../types/session';

@Resolver(() => Maintenance)
export class MaintananceResolver {
  constructor(private readonly maintananceService: MaintenanceService) {}

  @Mutation(() => Maintenance)
  createMaintanance(
    @Session()
    session: SessionContainer,
    @Args('createMaintananceInput')
    createMaintananceInput: MaintenanceCreateInput,
  ) {
    return this.maintananceService.create(session, createMaintananceInput);
  }

  @Query(() => [Maintenance], { name: 'maintenances' })
  findAll(
    @Session()
    session: SessionContainer,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Args('orderBy', { nullable: true })
    orderBy: MaintenanceOrderByWithRelationInput,
    @Args('where', { nullable: true }) where: MaintenanceWhereInput,
  ) {
    return this.maintananceService.findAll(
      session,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @Query(() => Int, { name: 'maintenanceCount' })
  maintenanceCount(
    @Session()
    session: SessionContainer,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Args('orderBy', { nullable: true })
    orderBy: MaintenanceOrderByWithRelationInput,
    @Args('where', { nullable: true }) where: MaintenanceWhereInput,
  ) {
    return this.maintananceService.count(
      session,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @Query(() => Maintenance, { name: 'maintenance' })
  findOne(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.maintananceService.findOne(session, id);
  }

  @Mutation(() => Maintenance)
  updateMaintanance(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('updateMaintananceInput')
    updateMaintananceInput: MaintenanceUpdateInput,
  ) {
    return this.maintananceService.update(session, id, updateMaintananceInput);
  }

  @Mutation(() => Maintenance)
  removeMaintanance(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.maintananceService.remove(session, id);
  }

  @ResolveField(() => Users)
  assignee(
    @Session()
    session: SessionContainer,
    @Parent() { assignee_id }: Maintenance,
  ) {
    return this.maintananceService.assignee(session, assignee_id);
  }

  @ResolveField(() => Machines)
  machine(
    @Session()
    session: SessionContainer,
    @Parent() { machine_id }: Maintenance,
  ) {
    return this.maintananceService.machine(session, machine_id);
  }

  @ResolveField(() => [Replacements])
  replacements(
    @Session()
    session: SessionContainer,
    @Parent() { id }: Maintenance,
  ) {
    return this.maintananceService.replacements(session, id);
  }

  @ResolveField(() => [Reports], { nullable: true })
  reports(
    @Session()
    session: SessionContainer,
    @Parent() { id }: Maintenance,
  ) {
    return this.maintananceService.reports(session, id);
  }

  @ResolveField(() => Ticket, { nullable: true })
  ticket(
    @Session()
    session: SessionContainer,
    @Parent() { id }: Maintenance,
  ) {
    return this.maintananceService.ticket(session, id);
  }

  @ResolveField(() => Boolean, { nullable: true })
  assigned(
    @Session()
    session: SessionContainer,
    @Parent() { id }: Maintenance,
  ) {
    return this.maintananceService.assigned(session, id);
  }
}
