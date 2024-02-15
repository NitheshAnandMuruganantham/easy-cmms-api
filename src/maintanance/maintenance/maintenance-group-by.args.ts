import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaintenanceWhereInput } from './maintenance-where.input';
import { Type } from 'class-transformer';
import { MaintenanceOrderByWithAggregationInput } from './maintenance-order-by-with-aggregation.input';
import { MaintenanceScalarFieldEnum } from './maintenance-scalar-field.enum';
import { MaintenanceScalarWhereWithAggregatesInput } from './maintenance-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MaintenanceCountAggregateInput } from './maintenance-count-aggregate.input';
import { MaintenanceAvgAggregateInput } from './maintenance-avg-aggregate.input';
import { MaintenanceSumAggregateInput } from './maintenance-sum-aggregate.input';
import { MaintenanceMinAggregateInput } from './maintenance-min-aggregate.input';
import { MaintenanceMaxAggregateInput } from './maintenance-max-aggregate.input';

@ArgsType()
export class MaintenanceGroupByArgs {
  @Field(() => MaintenanceWhereInput, { nullable: true })
  @Type(() => MaintenanceWhereInput)
  where?: MaintenanceWhereInput;

  @Field(() => [MaintenanceOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<MaintenanceOrderByWithAggregationInput>;

  @Field(() => [MaintenanceScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof MaintenanceScalarFieldEnum>;

  @Field(() => MaintenanceScalarWhereWithAggregatesInput, { nullable: true })
  having?: MaintenanceScalarWhereWithAggregatesInput;

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
