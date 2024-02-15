import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateManyInvoiceInput } from './invoice-items-create-many-invoice.input';
import { Type } from 'class-transformer';

@InputType()
export class invoice_itemsCreateManyInvoiceInputEnvelope {

    @Field(() => [invoice_itemsCreateManyInvoiceInput], {nullable:false})
    @Type(() => invoice_itemsCreateManyInvoiceInput)
    data!: Array<invoice_itemsCreateManyInvoiceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
