import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLBigInt } from 'graphql-scalars';
import { ReplacementsCountAggregate } from './replacements-count-aggregate.output';
import { ReplacementsAvgAggregate } from './replacements-avg-aggregate.output';
import { ReplacementsSumAggregate } from './replacements-sum-aggregate.output';
import { ReplacementsMinAggregate } from './replacements-min-aggregate.output';
import { ReplacementsMaxAggregate } from './replacements-max-aggregate.output';

@ObjectType()
export class ReplacementsGroupBy {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => GraphQLJSON, { nullable: false })
  metadata!: any;

  @Field(() => GraphQLBigInt, { nullable: false })
  item_id!: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  maintanance_id!: bigint | number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Boolean, { nullable: false })
  approved!: boolean;

  @Field(() => Date, { nullable: false })
  updated_at!: Date | string;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint | number;

  @Field(() => ReplacementsCountAggregate, { nullable: true })
  _count?: ReplacementsCountAggregate;

  @Field(() => ReplacementsAvgAggregate, { nullable: true })
  _avg?: ReplacementsAvgAggregate;

  @Field(() => ReplacementsSumAggregate, { nullable: true })
  _sum?: ReplacementsSumAggregate;

  @Field(() => ReplacementsMinAggregate, { nullable: true })
  _min?: ReplacementsMinAggregate;

  @Field(() => ReplacementsMaxAggregate, { nullable: true })
  _max?: ReplacementsMaxAggregate;
}
