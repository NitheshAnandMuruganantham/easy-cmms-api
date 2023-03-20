import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Production_dataCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    total_run_time!: number;

    @Field(() => Int, {nullable:false})
    total_down_time!: number;

    @Field(() => Int, {nullable:false})
    target_production!: number;

    @Field(() => Int, {nullable:false})
    actual_production!: number;

    @Field(() => Int, {nullable:false})
    from!: number;

    @Field(() => Int, {nullable:false})
    to!: number;

    @Field(() => Int, {nullable:false})
    updated_by!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    blockId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
