import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machine_catagoryWhereInput } from '../../machine_catagory/dto/machine-catagory-where.input';
import { Type } from 'class-transformer';
import { machine_catagoryOrderByWithAggregationInput } from '../../machine_catagory/dto/machine-catagory-order-by-with-aggregation.input';
import { Machine_catagoryScalarFieldEnum } from './machine-catagory-scalar-field.enum';
import { machine_catagoryScalarWhereWithAggregatesInput } from '../../machine_catagory/dto/machine-catagory-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymachineCatagoryArgs {
  @Field(() => machine_catagoryWhereInput, { nullable: true })
  @Type(() => machine_catagoryWhereInput)
  where?: machine_catagoryWhereInput;

  @Field(() => [machine_catagoryOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<machine_catagoryOrderByWithAggregationInput>;

  @Field(() => [Machine_catagoryScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Machine_catagoryScalarFieldEnum>;

  @Field(() => machine_catagoryScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: machine_catagoryScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
