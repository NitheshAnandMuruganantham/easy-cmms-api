import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Type } from 'class-transformer';
import { InvoicesCreateWithoutInvoice_itemsInput } from './invoices-create-without-invoice-items.input';

@InputType()
export class InvoicesCreateOrConnectWithoutInvoice_itemsInput {
  @Field(() => InvoicesWhereUniqueInput, { nullable: false })
  @Type(() => InvoicesWhereUniqueInput)
  where!: InvoicesWhereUniqueInput;

  @Field(() => InvoicesCreateWithoutInvoice_itemsInput, { nullable: false })
  @Type(() => InvoicesCreateWithoutInvoice_itemsInput)
  create!: InvoicesCreateWithoutInvoice_itemsInput;
}
