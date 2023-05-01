import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsWhereInput } from '../invoice-items/invoice-items-where.input';

@InputType()
export class Invoice_itemsListRelationFilter {

    @Field(() => invoice_itemsWhereInput, {nullable:true})
    every?: invoice_itemsWhereInput;

    @Field(() => invoice_itemsWhereInput, {nullable:true})
    some?: invoice_itemsWhereInput;

    @Field(() => invoice_itemsWhereInput, {nullable:true})
    none?: invoice_itemsWhereInput;
}
