import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryUpdateWithoutItemsInput } from './catagory-update-without-items.input';
import { Type } from 'class-transformer';
import { catagoryCreateWithoutItemsInput } from './catagory-create-without-items.input';

@InputType()
export class catagoryUpsertWithoutItemsInput {
  @Field(() => catagoryUpdateWithoutItemsInput, { nullable: false })
  @Type(() => catagoryUpdateWithoutItemsInput)
  update!: catagoryUpdateWithoutItemsInput;

  @Field(() => catagoryCreateWithoutItemsInput, { nullable: false })
  @Type(() => catagoryCreateWithoutItemsInput)
  create!: catagoryCreateWithoutItemsInput;
}
