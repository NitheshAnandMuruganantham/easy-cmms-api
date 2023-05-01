import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { InvoicesCountAggregate } from './invoices-count-aggregate.output';
import { InvoicesAvgAggregate } from './invoices-avg-aggregate.output';
import { InvoicesSumAggregate } from './invoices-sum-aggregate.output';
import { InvoicesMinAggregate } from './invoices-min-aggregate.output';
import { InvoicesMaxAggregate } from './invoices-max-aggregate.output';

@ObjectType()
export class InvoicesGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint | number;

    @Field(() => Float, {nullable:false})
    total!: number;

    @Field(() => Date, {nullable:false})
    invoice_date!: Date | string;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => GraphQLBigInt, {nullable:false})
    block_id!: bigint | number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => InvoicesCountAggregate, {nullable:true})
    _count?: InvoicesCountAggregate;

    @Field(() => InvoicesAvgAggregate, {nullable:true})
    _avg?: InvoicesAvgAggregate;

    @Field(() => InvoicesSumAggregate, {nullable:true})
    _sum?: InvoicesSumAggregate;

    @Field(() => InvoicesMinAggregate, {nullable:true})
    _min?: InvoicesMinAggregate;

    @Field(() => InvoicesMaxAggregate, {nullable:true})
    _max?: InvoicesMaxAggregate;
}
