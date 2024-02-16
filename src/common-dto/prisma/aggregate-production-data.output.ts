import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Production_dataCountAggregate } from './production-data-count-aggregate.output';
import { Production_dataAvgAggregate } from './production-data-avg-aggregate.output';
import { Production_dataSumAggregate } from './production-data-sum-aggregate.output';
import { Production_dataMinAggregate } from './production-data-min-aggregate.output';
import { Production_dataMaxAggregate } from './production-data-max-aggregate.output';

@ObjectType()
export class AggregateProduction_data {
  @Field(() => Production_dataCountAggregate, { nullable: true })
  _count?: Production_dataCountAggregate;

  @Field(() => Production_dataAvgAggregate, { nullable: true })
  _avg?: Production_dataAvgAggregate;

  @Field(() => Production_dataSumAggregate, { nullable: true })
  _sum?: Production_dataSumAggregate;

  @Field(() => Production_dataMinAggregate, { nullable: true })
  _min?: Production_dataMinAggregate;

  @Field(() => Production_dataMaxAggregate, { nullable: true })
  _max?: Production_dataMaxAggregate;
}
