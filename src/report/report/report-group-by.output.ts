import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ReportCountAggregate } from './report-count-aggregate.output';
import { ReportAvgAggregate } from './report-avg-aggregate.output';
import { ReportSumAggregate } from './report-sum-aggregate.output';
import { ReportMinAggregate } from './report-min-aggregate.output';
import { ReportMaxAggregate } from './report-max-aggregate.output';

@ObjectType()
export class ReportGroupBy {
  @Field(() => String, { nullable: false })
  id!: bigint | number;

  @Field(() => String, { nullable: false })
  sign!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  tag!: any;

  @Field(() => String, { nullable: false })
  validated!: bigint | number;

  @Field(() => String, { nullable: false })
  validated_sign!: bigint | number;

  @Field(() => String, { nullable: false })
  maintance_id!: bigint | number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: false })
  updated_at!: Date | string;

  @Field(() => ReportCountAggregate, { nullable: true })
  _count?: ReportCountAggregate;

  @Field(() => ReportAvgAggregate, { nullable: true })
  _avg?: ReportAvgAggregate;

  @Field(() => ReportSumAggregate, { nullable: true })
  _sum?: ReportSumAggregate;

  @Field(() => ReportMinAggregate, { nullable: true })
  _min?: ReportMinAggregate;

  @Field(() => ReportMaxAggregate, { nullable: true })
  _max?: ReportMaxAggregate;
}
