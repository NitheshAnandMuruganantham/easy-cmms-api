import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateWithoutInvoiceInput } from './invoice-items-create-without-invoice.input';
import { Type } from 'class-transformer';
import { invoice_itemsCreateOrConnectWithoutInvoiceInput } from './invoice-items-create-or-connect-without-invoice.input';
import { invoice_itemsUpsertWithWhereUniqueWithoutInvoiceInput } from './invoice-items-upsert-with-where-unique-without-invoice.input';
import { invoice_itemsCreateManyInvoiceInputEnvelope } from './invoice-items-create-many-invoice-input-envelope.input';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';
import { invoice_itemsUpdateWithWhereUniqueWithoutInvoiceInput } from './invoice-items-update-with-where-unique-without-invoice.input';
import { invoice_itemsUpdateManyWithWhereWithoutInvoiceInput } from './invoice-items-update-many-with-where-without-invoice.input';
import { invoice_itemsScalarWhereInput } from './invoice-items-scalar-where.input';

@InputType()
export class invoice_itemsUpdateManyWithoutInvoiceNestedInput {
  @Field(() => [invoice_itemsCreateWithoutInvoiceInput], { nullable: true })
  @Type(() => invoice_itemsCreateWithoutInvoiceInput)
  create?: Array<invoice_itemsCreateWithoutInvoiceInput>;

  @Field(() => [invoice_itemsCreateOrConnectWithoutInvoiceInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsCreateOrConnectWithoutInvoiceInput)
  connectOrCreate?: Array<invoice_itemsCreateOrConnectWithoutInvoiceInput>;

  @Field(() => [invoice_itemsUpsertWithWhereUniqueWithoutInvoiceInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsUpsertWithWhereUniqueWithoutInvoiceInput)
  upsert?: Array<invoice_itemsUpsertWithWhereUniqueWithoutInvoiceInput>;

  @Field(() => invoice_itemsCreateManyInvoiceInputEnvelope, { nullable: true })
  @Type(() => invoice_itemsCreateManyInvoiceInputEnvelope)
  createMany?: invoice_itemsCreateManyInvoiceInputEnvelope;

  @Field(() => [invoice_itemsWhereUniqueInput], { nullable: true })
  @Type(() => invoice_itemsWhereUniqueInput)
  set?: Array<invoice_itemsWhereUniqueInput>;

  @Field(() => [invoice_itemsWhereUniqueInput], { nullable: true })
  @Type(() => invoice_itemsWhereUniqueInput)
  disconnect?: Array<invoice_itemsWhereUniqueInput>;

  @Field(() => [invoice_itemsWhereUniqueInput], { nullable: true })
  @Type(() => invoice_itemsWhereUniqueInput)
  delete?: Array<invoice_itemsWhereUniqueInput>;

  @Field(() => [invoice_itemsWhereUniqueInput], { nullable: true })
  @Type(() => invoice_itemsWhereUniqueInput)
  connect?: Array<invoice_itemsWhereUniqueInput>;

  @Field(() => [invoice_itemsUpdateWithWhereUniqueWithoutInvoiceInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsUpdateWithWhereUniqueWithoutInvoiceInput)
  update?: Array<invoice_itemsUpdateWithWhereUniqueWithoutInvoiceInput>;

  @Field(() => [invoice_itemsUpdateManyWithWhereWithoutInvoiceInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsUpdateManyWithWhereWithoutInvoiceInput)
  updateMany?: Array<invoice_itemsUpdateManyWithWhereWithoutInvoiceInput>;

  @Field(() => [invoice_itemsScalarWhereInput], { nullable: true })
  @Type(() => invoice_itemsScalarWhereInput)
  deleteMany?: Array<invoice_itemsScalarWhereInput>;
}
