import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateWithoutItemInput } from './invoice-items-create-without-item.input';
import { Type } from 'class-transformer';
import { invoice_itemsCreateOrConnectWithoutItemInput } from './invoice-items-create-or-connect-without-item.input';
import { invoice_itemsCreateManyItemInputEnvelope } from './invoice-items-create-many-item-input-envelope.input';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';

@InputType()
export class invoice_itemsUncheckedCreateNestedManyWithoutItemInput {
  @Field(() => [invoice_itemsCreateWithoutItemInput], { nullable: true })
  @Type(() => invoice_itemsCreateWithoutItemInput)
  create?: Array<invoice_itemsCreateWithoutItemInput>;

  @Field(() => [invoice_itemsCreateOrConnectWithoutItemInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsCreateOrConnectWithoutItemInput)
  connectOrCreate?: Array<invoice_itemsCreateOrConnectWithoutItemInput>;

  @Field(() => invoice_itemsCreateManyItemInputEnvelope, { nullable: true })
  @Type(() => invoice_itemsCreateManyItemInputEnvelope)
  createMany?: invoice_itemsCreateManyItemInputEnvelope;

  @Field(() => [invoice_itemsWhereUniqueInput], { nullable: true })
  @Type(() => invoice_itemsWhereUniqueInput)
  connect?: Array<invoice_itemsWhereUniqueInput>;
}
