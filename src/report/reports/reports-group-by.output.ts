import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLBigInt } from 'graphql-scalars';
import { ReportsCountAggregate } from './reports-count-aggregate.output';
import { ReportsAvgAggregate } from './reports-avg-aggregate.output';
import { ReportsSumAggregate } from './reports-sum-aggregate.output';
import { ReportsMinAggregate } from './reports-min-aggregate.output';
import { ReportsMaxAggregate } from './reports-max-aggregate.output';

@ObjectType()
export class ReportsGroupBy {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint | number;

  @Field(() => String, { nullable: false })
  report!: string;

  @Field(() => String, { nullable: false })
  sign!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  tag!: any;

  @Field(() => GraphQLBigInt, { nullable: false })
  validated!: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  validated_sign!: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  maintance_id!: bigint | number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: false })
  updated_at!: Date | string;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint | number;

  @Field(() => ReportsCountAggregate, { nullable: true })
  _count?: ReportsCountAggregate;

  @Field(() => ReportsAvgAggregate, { nullable: true })
  _avg?: ReportsAvgAggregate;

  @Field(() => ReportsSumAggregate, { nullable: true })
  _sum?: ReportsSumAggregate;

  @Field(() => ReportsMinAggregate, { nullable: true })
  _min?: ReportsMinAggregate;

  @Field(() => ReportsMaxAggregate, { nullable: true })
  _max?: ReportsMaxAggregate;
}
