import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { BlockCountAggregate } from './block-count-aggregate.output';
import { BlockAvgAggregate } from './block-avg-aggregate.output';
import { BlockSumAggregate } from './block-sum-aggregate.output';
import { BlockMinAggregate } from './block-min-aggregate.output';
import { BlockMaxAggregate } from './block-max-aggregate.output';

@ObjectType()
export class BlockGroupBy {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  location!: string;

  @Field(() => [String], { nullable: true })
  Mailings?: Array<string>;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: false })
  updated_at!: Date | string;

  @Field(() => BlockCountAggregate, { nullable: true })
  _count?: BlockCountAggregate;

  @Field(() => BlockAvgAggregate, { nullable: true })
  _avg?: BlockAvgAggregate;

  @Field(() => BlockSumAggregate, { nullable: true })
  _sum?: BlockSumAggregate;

  @Field(() => BlockMinAggregate, { nullable: true })
  _min?: BlockMinAggregate;

  @Field(() => BlockMaxAggregate, { nullable: true })
  _max?: BlockMaxAggregate;
}
