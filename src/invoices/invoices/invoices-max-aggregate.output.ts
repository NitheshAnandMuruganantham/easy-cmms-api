import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class InvoicesMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => Float, {nullable:true})
    total?: number;

    @Field(() => Date, {nullable:true})
    invoice_date?: Date | string;

    @Field(() => String, {nullable:true})
    number?: string;

    @Field(() => GraphQLBigInt, {nullable:true})
    block_id?: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
