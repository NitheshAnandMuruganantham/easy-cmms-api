import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutInvoice_itemsInput } from './items-create-without-invoice-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutInvoice_itemsInput } from './items-create-or-connect-without-invoice-items.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutInvoice_itemsInput {
  @Field(() => ItemsCreateWithoutInvoice_itemsInput, { nullable: true })
  @Type(() => ItemsCreateWithoutInvoice_itemsInput)
  create?: ItemsCreateWithoutInvoice_itemsInput;

  @Field(() => ItemsCreateOrConnectWithoutInvoice_itemsInput, {
    nullable: true,
  })
  @Type(() => ItemsCreateOrConnectWithoutInvoice_itemsInput)
  connectOrCreate?: ItemsCreateOrConnectWithoutInvoice_itemsInput;

  @Field(() => ItemsWhereUniqueInput, { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  connect?: ItemsWhereUniqueInput;
}
