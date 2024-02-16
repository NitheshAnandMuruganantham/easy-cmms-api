import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { InvoicesCreateNestedOneWithoutInvoice_itemsInput } from '../invoices/invoices-create-nested-one-without-invoice-items.input';
import { BlockCreateNestedOneWithoutInvoice_itemsInput } from '../../../block/dto/block/block-create-nested-one-without-invoice-items.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class invoice_itemsCreateWithoutItemInput {
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

  @HideField()
  block!: BlockCreateNestedOneWithoutInvoice_itemsInput;
}
