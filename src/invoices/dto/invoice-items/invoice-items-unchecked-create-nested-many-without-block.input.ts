import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateWithoutBlockInput } from './invoice-items-create-without-block.input';
import { Type } from 'class-transformer';
import { invoice_itemsCreateOrConnectWithoutBlockInput } from './invoice-items-create-or-connect-without-block.input';
import { invoice_itemsCreateManyBlockInputEnvelope } from './invoice-items-create-many-block-input-envelope.input';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';

@InputType()
export class invoice_itemsUncheckedCreateNestedManyWithoutBlockInput {
  @Field(() => [invoice_itemsCreateWithoutBlockInput], { nullable: true })
  @Type(() => invoice_itemsCreateWithoutBlockInput)
  create?: Array<invoice_itemsCreateWithoutBlockInput>;

  @Field(() => [invoice_itemsCreateOrConnectWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => invoice_itemsCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<invoice_itemsCreateOrConnectWithoutBlockInput>;

  @Field(() => invoice_itemsCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => invoice_itemsCreateManyBlockInputEnvelope)
  createMany?: invoice_itemsCreateManyBlockInputEnvelope;

  @Field(() => [invoice_itemsWhereUniqueInput], { nullable: true })
  @Type(() => invoice_itemsWhereUniqueInput)
  connect?: Array<invoice_itemsWhereUniqueInput>;
}
