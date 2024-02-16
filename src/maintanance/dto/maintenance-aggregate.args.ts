import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaintenanceWhereInput } from './maintenance-where.input';
import { Type } from 'class-transformer';
import { MaintenanceOrderByWithRelationAndSearchRelevanceInput } from './maintenance-order-by-with-relation-and-search-relevance.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MaintenanceCountAggregateInput } from './maintenance-count-aggregate.input';
import { MaintenanceAvgAggregateInput } from './maintenance-avg-aggregate.input';
import { MaintenanceSumAggregateInput } from './maintenance-sum-aggregate.input';
import { MaintenanceMinAggregateInput } from './maintenance-min-aggregate.input';
import { MaintenanceMaxAggregateInput } from './maintenance-max-aggregate.input';

@ArgsType()
export class MaintenanceAggregateArgs {
  @Field(() => MaintenanceWhereInput, { nullable: true })
  @Type(() => MaintenanceWhereInput)
  where?: MaintenanceWhereInput;

  @Field(() => [MaintenanceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<MaintenanceOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => MaintenanceWhereUniqueInput, { nullable: true })
  cursor?: MaintenanceWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MaintenanceCountAggregateInput, { nullable: true })
  _count?: MaintenanceCountAggregateInput;

  @Field(() => MaintenanceAvgAggregateInput, { nullable: true })
  _avg?: MaintenanceAvgAggregateInput;

  @Field(() => MaintenanceSumAggregateInput, { nullable: true })
  _sum?: MaintenanceSumAggregateInput;

  @Field(() => MaintenanceMinAggregateInput, { nullable: true })
  _min?: MaintenanceMinAggregateInput;

  @Field(() => MaintenanceMaxAggregateInput, { nullable: true })
  _max?: MaintenanceMaxAggregateInput;
}
