import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCatagoryUpdateInput } from './item-catagory-update.input';
import { Type } from 'class-transformer';
import { ItemCatagoryWhereUniqueInput } from './item-catagory-where-unique.input';

@ArgsType()
export class UpdateOneItemCatagoryArgs {
  @Field(() => ItemCatagoryUpdateInput, { nullable: false })
  @Type(() => ItemCatagoryUpdateInput)
  data!: ItemCatagoryUpdateInput;

  @Field(() => ItemCatagoryWhereUniqueInput, { nullable: false })
  @Type(() => ItemCatagoryWhereUniqueInput)
  where!: ItemCatagoryWhereUniqueInput;
}
