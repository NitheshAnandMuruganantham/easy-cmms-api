import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportsWhereInput } from './reports-where.input';
import { Type } from 'class-transformer';
import { ReportsOrderByWithRelationAndSearchRelevanceInput } from './reports-order-by-with-relation-and-search-relevance.input';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReportsCountAggregateInput } from './reports-count-aggregate.input';
import { ReportsAvgAggregateInput } from './reports-avg-aggregate.input';
import { ReportsSumAggregateInput } from './reports-sum-aggregate.input';
import { ReportsMinAggregateInput } from './reports-min-aggregate.input';
import { ReportsMaxAggregateInput } from './reports-max-aggregate.input';

@ArgsType()
export class ReportsAggregateArgs {
  @Field(() => ReportsWhereInput, { nullable: true })
  @Type(() => ReportsWhereInput)
  where?: ReportsWhereInput;

  @Field(() => [ReportsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<ReportsOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => ReportsWhereUniqueInput, { nullable: true })
  cursor?: ReportsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ReportsCountAggregateInput, { nullable: true })
  _count?: ReportsCountAggregateInput;

  @Field(() => ReportsAvgAggregateInput, { nullable: true })
  _avg?: ReportsAvgAggregateInput;

  @Field(() => ReportsSumAggregateInput, { nullable: true })
  _sum?: ReportsSumAggregateInput;

  @Field(() => ReportsMinAggregateInput, { nullable: true })
  _min?: ReportsMinAggregateInput;

  @Field(() => ReportsMaxAggregateInput, { nullable: true })
  _max?: ReportsMaxAggregateInput;
}
