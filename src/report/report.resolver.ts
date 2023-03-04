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
import { Maintenance } from 'src/@generated/maintenance';
import {
  Reports,
  ReportsCreateInput,
  ReportsOrderByWithRelationInput,
  ReportsUpdateInput,
  ReportsWhereInput,
} from 'src/@generated/reports';
import { AuthGuard } from 'src/auth/auth.guard';
import { Session } from 'src/auth/session.decorator';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { ReportService } from './report.service';

@Resolver(() => Reports)
export class ReportResolver {
  constructor(
    private readonly reportService: ReportService,
    private readonly casl: CaslAbilityFactory,
  ) {}

  @Mutation(() => Reports)
  createReport(
    @Args('createReportInput') createReportInput: ReportsCreateInput,
    @Session()
    session: SessionContainer,
  ) {
    return this.reportService.create(session, createReportInput);
  }

  @Query(() => [Reports], { name: 'report' })
  findAll(
    @Args('where', { nullable: true }) where: ReportsWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: ReportsOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Session()
    session: SessionContainer,
  ) {
    return this.reportService.findAll(session, where, orderBy, limit, offset);
  }

  @Query(() => Reports, { name: 'report' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Session()
    session: SessionContainer,
  ) {
    return this.reportService.findOne(session, id);
  }

  @Mutation(() => Reports)
  updateReport(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateReportInput') updateReportInput: ReportsUpdateInput,
    @Session()
    session: SessionContainer,
  ) {
    return this.reportService.update(session, id, updateReportInput);
  }

  @Mutation(() => Reports)
  removeReport(
    @Args('id', { type: () => Int }) id: number,
    @Session()
    session: SessionContainer,
  ) {
    return this.reportService.remove(session, id);
  }

  @ResolveField(() => Maintenance, { nullable: true })
  maintenance(
    @Parent() { maintance_id }: Reports,
    @Session()
    session: SessionContainer,
  ) {
    return this.reportService.maintenance(session, maintance_id);
  }
}
