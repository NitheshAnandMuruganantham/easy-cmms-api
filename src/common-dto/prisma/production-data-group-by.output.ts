import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { Production_dataCountAggregate } from './production-data-count-aggregate.output';
import { Production_dataAvgAggregate } from './production-data-avg-aggregate.output';
import { Production_dataSumAggregate } from './production-data-sum-aggregate.output';
import { Production_dataMinAggregate } from './production-data-min-aggregate.output';
import { Production_dataMaxAggregate } from './production-data-max-aggregate.output';

@ObjectType()
export class Production_dataGroupBy {

    @Field(() => GraphQLBigInt, {nullable:false})
    id!: bigint | number;

    @Field(() => GraphQLJSON, {nullable:false})
    production!: any;

    @Field(() => String, {nullable:false})
    shift!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => GraphQLBigInt, {nullable:false})
    updated_by!: bigint | number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => GraphQLBigInt, {nullable:false})
    blockId!: bigint | number;

    @Field(() => Production_dataCountAggregate, {nullable:true})
    _count?: Production_dataCountAggregate;

    @Field(() => Production_dataAvgAggregate, {nullable:true})
    _avg?: Production_dataAvgAggregate;

    @Field(() => Production_dataSumAggregate, {nullable:true})
    _sum?: Production_dataSumAggregate;

    @Field(() => Production_dataMinAggregate, {nullable:true})
    _min?: Production_dataMinAggregate;

    @Field(() => Production_dataMaxAggregate, {nullable:true})
    _max?: Production_dataMaxAggregate;
}
