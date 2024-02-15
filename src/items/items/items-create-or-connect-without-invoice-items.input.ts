import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutInvoice_itemsInput } from './items-create-without-invoice-items.input';

@InputType()
export class ItemsCreateOrConnectWithoutInvoice_itemsInput {
  @Field(() => ItemsWhereUniqueInput, { nullable: false })
  @Type(() => ItemsWhereUniqueInput)
  where!: ItemsWhereUniqueInput;

  @Field(() => ItemsCreateWithoutInvoice_itemsInput, { nullable: false })
  @Type(() => ItemsCreateWithoutInvoice_itemsInput)
  create!: ItemsCreateWithoutInvoice_itemsInput;
}
