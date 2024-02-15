import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCatagoryCreateManyInput } from './item-catagory-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyItemCatagoryArgs {
  @Field(() => [ItemCatagoryCreateManyInput], { nullable: false })
  @Type(() => ItemCatagoryCreateManyInput)
  data!: Array<ItemCatagoryCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
