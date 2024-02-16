import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { InvoicesCreateNestedOneWithoutInvoice_itemsInput } from '../invoices/invoices-create-nested-one-without-invoice-items.input';
import { ItemsCreateNestedOneWithoutInvoice_itemsInput } from '../../../items/items/items-create-nested-one-without-invoice-items.input';

@InputType()
export class invoice_itemsCreateWithoutBlockInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => Float, { nullable: false })
  unit_price!: number;

  @Field(() => Float, { nullable: false })
  quantity!: number;

  @Field(() => Float, { nullable: false })
  amount!: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => InvoicesCreateNestedOneWithoutInvoice_itemsInput, {
    nullable: false,
  })
  invoice!: InvoicesCreateNestedOneWithoutInvoice_itemsInput;

  @Field(() => ItemsCreateNestedOneWithoutInvoice_itemsInput, {
    nullable: false,
  })
  item!: ItemsCreateNestedOneWithoutInvoice_itemsInput;
}
