import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../block/block-order-by-with-relation-and-search-relevance.input';
import { invoice_itemsOrderByRelationAggregateInput } from '../invoice-items/invoice-items-order-by-relation-aggregate.input';
import { InvoicesOrderByRelevanceInput } from './invoices-order-by-relevance.input';

@InputType()
export class InvoicesOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invoice_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @HideField()
    block_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @HideField()
    block?: BlockOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => invoice_itemsOrderByRelationAggregateInput, {nullable:true})
    invoice_items?: invoice_itemsOrderByRelationAggregateInput;

    @Field(() => InvoicesOrderByRelevanceInput, {nullable:true})
    _relevance?: InvoicesOrderByRelevanceInput;
}
