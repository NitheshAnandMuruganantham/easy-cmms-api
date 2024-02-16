import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutCatagoryInput } from './items-update-without-catagory.input';
import { ItemsCreateWithoutCatagoryInput } from './items-create-without-catagory.input';

@InputType()
export class ItemsUpsertWithWhereUniqueWithoutCatagoryInput {
  @Field(() => ItemsWhereUniqueInput, { nullable: false })
  @Type(() => ItemsWhereUniqueInput)
  where!: ItemsWhereUniqueInput;

  @Field(() => ItemsUpdateWithoutCatagoryInput, { nullable: false })
  @Type(() => ItemsUpdateWithoutCatagoryInput)
  update!: ItemsUpdateWithoutCatagoryInput;

  @Field(() => ItemsCreateWithoutCatagoryInput, { nullable: false })
  @Type(() => ItemsCreateWithoutCatagoryInput)
  create!: ItemsCreateWithoutCatagoryInput;
}
