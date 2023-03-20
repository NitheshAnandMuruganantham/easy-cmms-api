import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Production_dataSumAggregate {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => Int, {nullable:true})
    total_run_time?: number;

    @Field(() => Int, {nullable:true})
    total_down_time?: number;

    @Field(() => Int, {nullable:true})
    target_production?: number;

    @Field(() => Int, {nullable:true})
    actual_production?: number;

    @Field(() => GraphQLBigInt, {nullable:true})
    updated_by?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    blockId?: bigint | number;
}
