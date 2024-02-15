import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { production_dataWhereInput } from '../production-data/production-data-where.input';
import { Type } from 'class-transformer';
import { production_dataOrderByWithAggregationInput } from '../production-data/production-data-order-by-with-aggregation.input';
import { Production_dataScalarFieldEnum } from './production-data-scalar-field.enum';
import { production_dataScalarWhereWithAggregatesInput } from '../production-data/production-data-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByproductionDataArgs {
  @Field(() => production_dataWhereInput, { nullable: true })
  @Type(() => production_dataWhereInput)
  where?: production_dataWhereInput;

  @Field(() => [production_dataOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<production_dataOrderByWithAggregationInput>;

  @Field(() => [Production_dataScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Production_dataScalarFieldEnum>;

  @Field(() => production_dataScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: production_dataScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
