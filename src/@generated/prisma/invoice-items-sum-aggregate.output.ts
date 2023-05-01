import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Invoice_itemsSumAggregate {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    invoice_id?: bigint | number;

    @Field(() => Float, {nullable:true})
    unit_price?: number;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => GraphQLBigInt, {nullable:true})
    item_id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    block_id?: bigint | number;
}
