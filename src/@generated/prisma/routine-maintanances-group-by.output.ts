import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { Routine_maintanancesCountAggregate } from './routine-maintanances-count-aggregate.output';
import { Routine_maintanancesAvgAggregate } from './routine-maintanances-avg-aggregate.output';
import { Routine_maintanancesSumAggregate } from './routine-maintanances-sum-aggregate.output';
import { Routine_maintanancesMinAggregate } from './routine-maintanances-min-aggregate.output';
import { Routine_maintanancesMaxAggregate } from './routine-maintanances-max-aggregate.output';

@ObjectType()
export class Routine_maintanancesGroupBy {

    @Field(() => GraphQLBigInt, {nullable:false})
    id!: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    cron!: string;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => GraphQLBigInt, {nullable:false})
    assignee_id!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    meachine_id!: bigint | number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => GraphQLBigInt, {nullable:false})
    block_id!: bigint | number;

    @Field(() => Routine_maintanancesCountAggregate, {nullable:true})
    _count?: Routine_maintanancesCountAggregate;

    @Field(() => Routine_maintanancesAvgAggregate, {nullable:true})
    _avg?: Routine_maintanancesAvgAggregate;

    @Field(() => Routine_maintanancesSumAggregate, {nullable:true})
    _sum?: Routine_maintanancesSumAggregate;

    @Field(() => Routine_maintanancesMinAggregate, {nullable:true})
    _min?: Routine_maintanancesMinAggregate;

    @Field(() => Routine_maintanancesMaxAggregate, {nullable:true})
    _max?: Routine_maintanancesMaxAggregate;
}
