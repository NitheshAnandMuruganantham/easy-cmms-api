import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReportsCountAggregate } from './reports-count-aggregate.output';
import { ReportsAvgAggregate } from './reports-avg-aggregate.output';
import { ReportsSumAggregate } from './reports-sum-aggregate.output';
import { ReportsMinAggregate } from './reports-min-aggregate.output';
import { ReportsMaxAggregate } from './reports-max-aggregate.output';

@ObjectType()
export class AggregateReports {
  @Field(() => ReportsCountAggregate, { nullable: true })
  _count?: ReportsCountAggregate;

  @Field(() => ReportsAvgAggregate, { nullable: true })
  _avg?: ReportsAvgAggregate;

  @Field(() => ReportsSumAggregate, { nullable: true })
  _sum?: ReportsSumAggregate;

  @Field(() => ReportsMinAggregate, { nullable: true })
  _min?: ReportsMinAggregate;

  @Field(() => ReportsMaxAggregate, { nullable: true })
  _max?: ReportsMaxAggregate;
}
