import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';

@InputType()
export class production_dataCreateManyInput {

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

    @Field(() => Date, {nullable:false})
    from!: Date | string;

    @Field(() => Date, {nullable:false})
    to!: Date | string;

    @Field(() => GraphQLBigInt, {nullable:false})
    updated_by!: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => GraphQLBigInt, {nullable:true})
    blockId?: bigint | number;
}
