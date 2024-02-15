import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { CatagoryCountAggregate } from './catagory-count-aggregate.output';
import { CatagoryAvgAggregate } from './catagory-avg-aggregate.output';
import { CatagorySumAggregate } from './catagory-sum-aggregate.output';
import { CatagoryMinAggregate } from './catagory-min-aggregate.output';
import { CatagoryMaxAggregate } from './catagory-max-aggregate.output';

@ObjectType()
export class CatagoryGroupBy {
  @Field(() => GraphQLBigInt, { nullable: false })
  id!: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint | number;

  @Field(() => Date, { nullable: false })
  updated_at!: Date | string;

  @Field(() => CatagoryCountAggregate, { nullable: true })
  _count?: CatagoryCountAggregate;

  @Field(() => CatagoryAvgAggregate, { nullable: true })
  _avg?: CatagoryAvgAggregate;

  @Field(() => CatagorySumAggregate, { nullable: true })
  _sum?: CatagorySumAggregate;

  @Field(() => CatagoryMinAggregate, { nullable: true })
  _min?: CatagoryMinAggregate;

  @Field(() => CatagoryMaxAggregate, { nullable: true })
  _max?: CatagoryMaxAggregate;
}
