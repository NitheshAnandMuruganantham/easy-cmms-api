import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Users } from '../users/users.model';
import { Block } from '../block/block.model';

@ObjectType()
export class production_data {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => Int, {nullable:true})
    total_run_time!: number | null;

    @Field(() => Int, {nullable:true})
    total_down_time!: number | null;

    @Field(() => Int, {nullable:true})
    target_production!: number | null;

    @Field(() => Int, {nullable:true})
    actual_production!: number | null;

    @Field(() => Date, {nullable:false})
    from!: Date;

    @Field(() => Date, {nullable:false})
    to!: Date;

    @Field(() => GraphQLBigInt, {nullable:false})
    updated_by!: bigint;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => GraphQLBigInt, {nullable:true})
    blockId!: bigint | null;

    @Field(() => Users, {nullable:false})
    updatedBy?: Users;

    @Field(() => Block, {nullable:true})
    Block?: Block | null;
}
