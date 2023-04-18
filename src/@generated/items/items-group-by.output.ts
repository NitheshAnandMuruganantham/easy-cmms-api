import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { ItemsCountAggregate } from './items-count-aggregate.output';
import { ItemsAvgAggregate } from './items-avg-aggregate.output';
import { ItemsSumAggregate } from './items-sum-aggregate.output';
import { ItemsMinAggregate } from './items-min-aggregate.output';
import { ItemsMaxAggregate } from './items-max-aggregate.output';

@ObjectType()
export class ItemsGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Float, {nullable:false})
    unit_price!: number;

    @Field(() => GraphQLBigInt, {nullable:false})
    catagory_id!: bigint | number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => GraphQLBigInt, {nullable:false})
    block_id!: bigint | number;

    @Field(() => ItemsCountAggregate, {nullable:true})
    _count?: ItemsCountAggregate;

    @Field(() => ItemsAvgAggregate, {nullable:true})
    _avg?: ItemsAvgAggregate;

    @Field(() => ItemsSumAggregate, {nullable:true})
    _sum?: ItemsSumAggregate;

    @Field(() => ItemsMinAggregate, {nullable:true})
    _min?: ItemsMinAggregate;

    @Field(() => ItemsMaxAggregate, {nullable:true})
    _max?: ItemsMaxAggregate;
}
