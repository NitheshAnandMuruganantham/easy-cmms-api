import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class InvoicesSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => Float, {nullable:true})
    total?: number;

    @Field(() => GraphQLBigInt, {nullable:true})
    block_id?: bigint | number;
}
