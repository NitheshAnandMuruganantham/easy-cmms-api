import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateWithoutInvoice_itemsInput } from './items-update-without-invoice-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutInvoice_itemsInput } from './items-create-without-invoice-items.input';

@InputType()
export class ItemsUpsertWithoutInvoice_itemsInput {
  @Field(() => ItemsUpdateWithoutInvoice_itemsInput, { nullable: false })
  @Type(() => ItemsUpdateWithoutInvoice_itemsInput)
  update!: ItemsUpdateWithoutInvoice_itemsInput;

  @Field(() => ItemsCreateWithoutInvoice_itemsInput, { nullable: false })
  @Type(() => ItemsCreateWithoutInvoice_itemsInput)
  create!: ItemsCreateWithoutInvoice_itemsInput;
}
