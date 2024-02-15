import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateWithoutItemInput } from './invoice-items-create-without-item.input';
import { Type } from 'class-transformer';
import { invoice_itemsCreateOrConnectWithoutItemInput } from './invoice-items-create-or-connect-without-item.input';
import { invoice_itemsUpsertWithWhereUniqueWithoutItemInput } from './invoice-items-upsert-with-where-unique-without-item.input';
import { invoice_itemsCreateManyItemInputEnvelope } from './invoice-items-create-many-item-input-envelope.input';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';
import { invoice_itemsUpdateWithWhereUniqueWithoutItemInput } from './invoice-items-update-with-where-unique-without-item.input';
import { invoice_itemsUpdateManyWithWhereWithoutItemInput } from './invoice-items-update-many-with-where-without-item.input';
import { invoice_itemsScalarWhereInput } from './invoice-items-scalar-where.input';

@InputType()
export class invoice_itemsUncheckedUpdateManyWithoutItemNestedInput {
  @Field(() => [invoice_itemsCreateWithoutItemInput], { nullable: true })
  @Type(() => invoice_itemsCreateWithoutItemInput)
  create?: Array<invoice_itemsCreateWithoutItemInput>;

  @Field(() => [invoice_itemsCreateOrConnectWithoutItemInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsCreateOrConnectWithoutItemInput)
  connectOrCreate?: Array<invoice_itemsCreateOrConnectWithoutItemInput>;

  @Field(() => [invoice_itemsUpsertWithWhereUniqueWithoutItemInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsUpsertWithWhereUniqueWithoutItemInput)
  upsert?: Array<invoice_itemsUpsertWithWhereUniqueWithoutItemInput>;

  @Field(() => invoice_itemsCreateManyItemInputEnvelope, { nullable: true })
  @Type(() => invoice_itemsCreateManyItemInputEnvelope)
  createMany?: invoice_itemsCreateManyItemInputEnvelope;

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

  @Field(() => [invoice_itemsUpdateWithWhereUniqueWithoutItemInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsUpdateWithWhereUniqueWithoutItemInput)
  update?: Array<invoice_itemsUpdateWithWhereUniqueWithoutItemInput>;

  @Field(() => [invoice_itemsUpdateManyWithWhereWithoutItemInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsUpdateManyWithWhereWithoutItemInput)
  updateMany?: Array<invoice_itemsUpdateManyWithWhereWithoutItemInput>;

  @Field(() => [invoice_itemsScalarWhereInput], { nullable: true })
  @Type(() => invoice_itemsScalarWhereInput)
  deleteMany?: Array<invoice_itemsScalarWhereInput>;
}
