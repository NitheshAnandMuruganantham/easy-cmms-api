import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { BlockCreateNestedOneWithoutInvoicesInput } from '../../../block/dto/block/block-create-nested-one-without-invoices.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class InvoicesCreateWithoutInvoice_itemsInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => Float, { nullable: false })
  total!: number;

  @Field(() => Date, { nullable: false })
  invoice_date!: Date | string;

  @Field(() => String, { nullable: false })
  number!: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @HideField()
  block!: BlockCreateNestedOneWithoutInvoicesInput;
}
