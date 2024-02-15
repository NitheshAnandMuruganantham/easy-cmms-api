import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';
import { Type } from 'class-transformer';
import { invoice_itemsUpdateWithoutInvoiceInput } from './invoice-items-update-without-invoice.input';
import { invoice_itemsCreateWithoutInvoiceInput } from './invoice-items-create-without-invoice.input';

@InputType()
export class invoice_itemsUpsertWithWhereUniqueWithoutInvoiceInput {

    @Field(() => invoice_itemsWhereUniqueInput, {nullable:false})
    @Type(() => invoice_itemsWhereUniqueInput)
    where!: invoice_itemsWhereUniqueInput;

    @Field(() => invoice_itemsUpdateWithoutInvoiceInput, {nullable:false})
    @Type(() => invoice_itemsUpdateWithoutInvoiceInput)
    update!: invoice_itemsUpdateWithoutInvoiceInput;

    @Field(() => invoice_itemsCreateWithoutInvoiceInput, {nullable:false})
    @Type(() => invoice_itemsCreateWithoutInvoiceInput)
    create!: invoice_itemsCreateWithoutInvoiceInput;
}
