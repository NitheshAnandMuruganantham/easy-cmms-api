import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoice_itemsWhereInput } from '../invoice-items/invoice-items-where.input';
import { Type } from 'class-transformer';
import { invoice_itemsOrderByWithRelationAndSearchRelevanceInput } from '../invoice-items/invoice-items-order-by-with-relation-and-search-relevance.input';
import { invoice_itemsWhereUniqueInput } from '../invoice-items/invoice-items-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Invoice_itemsScalarFieldEnum } from './invoice-items-scalar-field.enum';

@ArgsType()
export class FindFirstinvoiceItemsOrThrowArgs {

    @Field(() => invoice_itemsWhereInput, {nullable:true})
    @Type(() => invoice_itemsWhereInput)
    where?: invoice_itemsWhereInput;

    @Field(() => [invoice_itemsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<invoice_itemsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => invoice_itemsWhereUniqueInput, {nullable:true})
    cursor?: invoice_itemsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Invoice_itemsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Invoice_itemsScalarFieldEnum>;
}
