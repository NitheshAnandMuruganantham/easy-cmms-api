import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { Machines } from '../machines/machines.model';
import { Items } from '../items/items.model';
import { Block } from '../block/block.model';

@ObjectType()
export class machines_items {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => GraphQLBigInt, {nullable:false})
    machine_id!: bigint;

    @Field(() => GraphQLBigInt, {nullable:false})
    item_id!: bigint;

    @Field(() => GraphQLBigInt, {nullable:false})
    block_id!: bigint;

    @Field(() => Machines, {nullable:false})
    machine?: Machines;

    @Field(() => Items, {nullable:false})
    items?: Items;

    @Field(() => Block, {nullable:false})
    block?: Block;
}
