import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCatagoryCreateWithoutItemsInput } from './item-catagory-create-without-items.input';
import { Type } from 'class-transformer';
import { ItemCatagoryCreateOrConnectWithoutItemsInput } from './item-catagory-create-or-connect-without-items.input';
import { ItemCatagoryUpsertWithoutItemsInput } from './item-catagory-upsert-without-items.input';
import { ItemCatagoryWhereUniqueInput } from './item-catagory-where-unique.input';
import { ItemCatagoryUpdateWithoutItemsInput } from './item-catagory-update-without-items.input';

@InputType()
export class ItemCatagoryUpdateOneRequiredWithoutItemsNestedInput {
  @Field(() => ItemCatagoryCreateWithoutItemsInput, { nullable: true })
  @Type(() => ItemCatagoryCreateWithoutItemsInput)
  create?: ItemCatagoryCreateWithoutItemsInput;

  @Field(() => ItemCatagoryCreateOrConnectWithoutItemsInput, { nullable: true })
  @Type(() => ItemCatagoryCreateOrConnectWithoutItemsInput)
  connectOrCreate?: ItemCatagoryCreateOrConnectWithoutItemsInput;

  @Field(() => ItemCatagoryUpsertWithoutItemsInput, { nullable: true })
  @Type(() => ItemCatagoryUpsertWithoutItemsInput)
  upsert?: ItemCatagoryUpsertWithoutItemsInput;

  @Field(() => ItemCatagoryWhereUniqueInput, { nullable: true })
  @Type(() => ItemCatagoryWhereUniqueInput)
  connect?: ItemCatagoryWhereUniqueInput;

  @Field(() => ItemCatagoryUpdateWithoutItemsInput, { nullable: true })
  @Type(() => ItemCatagoryUpdateWithoutItemsInput)
  update?: ItemCatagoryUpdateWithoutItemsInput;
}
