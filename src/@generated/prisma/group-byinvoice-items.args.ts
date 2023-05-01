import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoice_itemsWhereInput } from '../invoice-items/invoice-items-where.input';
import { Type } from 'class-transformer';
import { invoice_itemsOrderByWithAggregationInput } from '../invoice-items/invoice-items-order-by-with-aggregation.input';
import { Invoice_itemsScalarFieldEnum } from './invoice-items-scalar-field.enum';
import { invoice_itemsScalarWhereWithAggregatesInput } from '../invoice-items/invoice-items-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByinvoiceItemsArgs {

    @Field(() => invoice_itemsWhereInput, {nullable:true})
    @Type(() => invoice_itemsWhereInput)
    where?: invoice_itemsWhereInput;

    @Field(() => [invoice_itemsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<invoice_itemsOrderByWithAggregationInput>;

    @Field(() => [Invoice_itemsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Invoice_itemsScalarFieldEnum>;

    @Field(() => invoice_itemsScalarWhereWithAggregatesInput, {nullable:true})
    having?: invoice_itemsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
