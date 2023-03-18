import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { Block } from '../block/block.model';

@ObjectType()
export class block_settings {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => GraphQLBigInt, {nullable:false})
    block_id!: bigint;

    @Field(() => Block, {nullable:false})
    block?: Block;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
