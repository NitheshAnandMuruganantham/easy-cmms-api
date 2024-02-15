import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutItemCatagoryInput } from './items-update-without-item-catagory.input';
import { ItemsCreateWithoutItemCatagoryInput } from './items-create-without-item-catagory.input';

@InputType()
export class ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput {
  @Field(() => ItemsWhereUniqueInput, { nullable: false })
  @Type(() => ItemsWhereUniqueInput)
  where!: ItemsWhereUniqueInput;

  @Field(() => ItemsUpdateWithoutItemCatagoryInput, { nullable: false })
  @Type(() => ItemsUpdateWithoutItemCatagoryInput)
  update!: ItemsUpdateWithoutItemCatagoryInput;

  @Field(() => ItemsCreateWithoutItemCatagoryInput, { nullable: false })
  @Type(() => ItemsCreateWithoutItemCatagoryInput)
  create!: ItemsCreateWithoutItemCatagoryInput;
}
