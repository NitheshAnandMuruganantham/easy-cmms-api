import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { Invoices } from '../invoices/invoices.model';
import { Items } from '../items/items.model';
import { Block } from '../block/block.model';

@ObjectType()
export class invoice_items {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => GraphQLBigInt, {nullable:false})
    invoice_id!: bigint;

    @Field(() => Float, {nullable:false})
    unit_price!: number;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => GraphQLBigInt, {nullable:false})
    item_id!: bigint;

    @Field(() => GraphQLBigInt, {nullable:false})
    block_id!: bigint;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Invoices, {nullable:false})
    invoice?: Invoices;

    @Field(() => Items, {nullable:false})
    item?: Items;

    @Field(() => Block, {nullable:false})
    block?: Block;
}
