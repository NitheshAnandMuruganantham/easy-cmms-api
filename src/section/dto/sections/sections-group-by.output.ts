import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { SectionsCountAggregate } from './sections-count-aggregate.output';
import { SectionsAvgAggregate } from './sections-avg-aggregate.output';
import { SectionsSumAggregate } from './sections-sum-aggregate.output';
import { SectionsMinAggregate } from './sections-min-aggregate.output';
import { SectionsMaxAggregate } from './sections-max-aggregate.output';

@ObjectType()
export class SectionsGroupBy {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint | number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: false })
  updated_at!: Date | string;

  @Field(() => SectionsCountAggregate, { nullable: true })
  _count?: SectionsCountAggregate;

  @Field(() => SectionsAvgAggregate, { nullable: true })
  _avg?: SectionsAvgAggregate;

  @Field(() => SectionsSumAggregate, { nullable: true })
  _sum?: SectionsSumAggregate;

  @Field(() => SectionsMinAggregate, { nullable: true })
  _min?: SectionsMinAggregate;

  @Field(() => SectionsMaxAggregate, { nullable: true })
  _max?: SectionsMaxAggregate;
}
