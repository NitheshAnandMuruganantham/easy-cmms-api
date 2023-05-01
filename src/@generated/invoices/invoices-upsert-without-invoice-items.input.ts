import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesUpdateWithoutInvoice_itemsInput } from './invoices-update-without-invoice-items.input';
import { Type } from 'class-transformer';
import { InvoicesCreateWithoutInvoice_itemsInput } from './invoices-create-without-invoice-items.input';

@InputType()
export class InvoicesUpsertWithoutInvoice_itemsInput {

    @Field(() => InvoicesUpdateWithoutInvoice_itemsInput, {nullable:false})
    @Type(() => InvoicesUpdateWithoutInvoice_itemsInput)
    update!: InvoicesUpdateWithoutInvoice_itemsInput;

    @Field(() => InvoicesCreateWithoutInvoice_itemsInput, {nullable:false})
    @Type(() => InvoicesCreateWithoutInvoice_itemsInput)
    create!: InvoicesCreateWithoutInvoice_itemsInput;
}
