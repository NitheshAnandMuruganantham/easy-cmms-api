import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutInvoice_itemsInput } from './items-create-without-invoice-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutInvoice_itemsInput } from './items-create-or-connect-without-invoice-items.input';
import { ItemsUpsertWithoutInvoice_itemsInput } from './items-upsert-without-invoice-items.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateWithoutInvoice_itemsInput } from './items-update-without-invoice-items.input';

@InputType()
export class ItemsUpdateOneRequiredWithoutInvoice_itemsNestedInput {
  @Field(() => ItemsCreateWithoutInvoice_itemsInput, { nullable: true })
  @Type(() => ItemsCreateWithoutInvoice_itemsInput)
  create?: ItemsCreateWithoutInvoice_itemsInput;

  @Field(() => ItemsCreateOrConnectWithoutInvoice_itemsInput, {
    nullable: true,
  })
  @Type(() => ItemsCreateOrConnectWithoutInvoice_itemsInput)
  connectOrCreate?: ItemsCreateOrConnectWithoutInvoice_itemsInput;

  @Field(() => ItemsUpsertWithoutInvoice_itemsInput, { nullable: true })
  @Type(() => ItemsUpsertWithoutInvoice_itemsInput)
  upsert?: ItemsUpsertWithoutInvoice_itemsInput;

  @Field(() => ItemsWhereUniqueInput, { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  connect?: ItemsWhereUniqueInput;

  @Field(() => ItemsUpdateWithoutInvoice_itemsInput, { nullable: true })
  @Type(() => ItemsUpdateWithoutInvoice_itemsInput)
  update?: ItemsUpdateWithoutInvoice_itemsInput;
}
