import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InvoicesCountAggregate } from './invoices-count-aggregate.output';
import { InvoicesAvgAggregate } from './invoices-avg-aggregate.output';
import { InvoicesSumAggregate } from './invoices-sum-aggregate.output';
import { InvoicesMinAggregate } from './invoices-min-aggregate.output';
import { InvoicesMaxAggregate } from './invoices-max-aggregate.output';

@ObjectType()
export class AggregateInvoices {

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
