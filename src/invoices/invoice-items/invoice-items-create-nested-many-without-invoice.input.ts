import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateWithoutInvoiceInput } from './invoice-items-create-without-invoice.input';
import { Type } from 'class-transformer';
import { invoice_itemsCreateOrConnectWithoutInvoiceInput } from './invoice-items-create-or-connect-without-invoice.input';
import { invoice_itemsCreateManyInvoiceInputEnvelope } from './invoice-items-create-many-invoice-input-envelope.input';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';

@InputType()
export class invoice_itemsCreateNestedManyWithoutInvoiceInput {
  @Field(() => [invoice_itemsCreateWithoutInvoiceInput], { nullable: true })
  @Type(() => invoice_itemsCreateWithoutInvoiceInput)
  create?: Array<invoice_itemsCreateWithoutInvoiceInput>;

  @Field(() => [invoice_itemsCreateOrConnectWithoutInvoiceInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsCreateOrConnectWithoutInvoiceInput)
  connectOrCreate?: Array<invoice_itemsCreateOrConnectWithoutInvoiceInput>;

  @Field(() => invoice_itemsCreateManyInvoiceInputEnvelope, { nullable: true })
  @Type(() => invoice_itemsCreateManyInvoiceInputEnvelope)
  createMany?: invoice_itemsCreateManyInvoiceInputEnvelope;

  @Field(() => [invoice_itemsWhereUniqueInput], { nullable: true })
  @Type(() => invoice_itemsWhereUniqueInput)
  connect?: Array<invoice_itemsWhereUniqueInput>;
}
