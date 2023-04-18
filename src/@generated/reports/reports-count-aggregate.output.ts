import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReportsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    report!: number;

    @Field(() => Int, {nullable:false})
    sign!: number;

    @Field(() => Int, {nullable:false})
    tag!: number;

    @Field(() => Int, {nullable:false})
    validated!: number;

    @Field(() => Int, {nullable:false})
    validated_sign!: number;

    @Field(() => Int, {nullable:false})
    maintance_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    block_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
