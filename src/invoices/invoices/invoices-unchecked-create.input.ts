import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { invoice_itemsUncheckedCreateNestedManyWithoutInvoiceInput } from '../invoice-items/invoice-items-unchecked-create-nested-many-without-invoice.input';

@InputType()
export class InvoicesUncheckedCreateInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => Float, { nullable: false })
  total!: number;

  @Field(() => Date, { nullable: false })
  invoice_date!: Date | string;

  @Field(() => String, { nullable: false })
  number!: string;

  @HideField()
  block_id!: bigint | number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => invoice_itemsUncheckedCreateNestedManyWithoutInvoiceInput, {
    nullable: true,
  })
  invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoiceInput;
}
