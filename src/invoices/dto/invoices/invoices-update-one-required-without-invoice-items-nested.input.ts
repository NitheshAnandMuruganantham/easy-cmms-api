import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesCreateWithoutInvoice_itemsInput } from './invoices-create-without-invoice-items.input';
import { Type } from 'class-transformer';
import { InvoicesCreateOrConnectWithoutInvoice_itemsInput } from './invoices-create-or-connect-without-invoice-items.input';
import { InvoicesUpsertWithoutInvoice_itemsInput } from './invoices-upsert-without-invoice-items.input';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';
import { InvoicesUpdateWithoutInvoice_itemsInput } from './invoices-update-without-invoice-items.input';

@InputType()
export class InvoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput {
  @Field(() => InvoicesCreateWithoutInvoice_itemsInput, { nullable: true })
  @Type(() => InvoicesCreateWithoutInvoice_itemsInput)
  create?: InvoicesCreateWithoutInvoice_itemsInput;

  @Field(() => InvoicesCreateOrConnectWithoutInvoice_itemsInput, {
    nullable: true,
  })
  @Type(() => InvoicesCreateOrConnectWithoutInvoice_itemsInput)
  connectOrCreate?: InvoicesCreateOrConnectWithoutInvoice_itemsInput;

  @Field(() => InvoicesUpsertWithoutInvoice_itemsInput, { nullable: true })
  @Type(() => InvoicesUpsertWithoutInvoice_itemsInput)
  upsert?: InvoicesUpsertWithoutInvoice_itemsInput;

  @Field(() => InvoicesWhereUniqueInput, { nullable: true })
  @Type(() => InvoicesWhereUniqueInput)
  connect?: InvoicesWhereUniqueInput;

  @Field(() => InvoicesUpdateWithoutInvoice_itemsInput, { nullable: true })
  @Type(() => InvoicesUpdateWithoutInvoice_itemsInput)
  update?: InvoicesUpdateWithoutInvoice_itemsInput;
}
