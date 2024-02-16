import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { catagoryWhereInput } from './catagory-where.input';
import { Type } from 'class-transformer';
import { catagoryOrderByWithAggregationInput } from './catagory-order-by-with-aggregation.input';
import { CatagoryScalarFieldEnum } from '../../common-dto/prisma/catagory-scalar-field.enum';
import { catagoryScalarWhereWithAggregatesInput } from './catagory-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class catagoryGroupByArgs {
  @Field(() => catagoryWhereInput, { nullable: true })
  @Type(() => catagoryWhereInput)
  where?: catagoryWhereInput;

  @Field(() => [catagoryOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<catagoryOrderByWithAggregationInput>;

  @Field(() => [CatagoryScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof CatagoryScalarFieldEnum>;

  @Field(() => catagoryScalarWhereWithAggregatesInput, { nullable: true })
  having?: catagoryScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
