import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';
import { Type } from 'class-transformer';
import { catagoryUpdateWithoutBlockInput } from './catagory-update-without-block.input';
import { catagoryCreateWithoutBlockInput } from './catagory-create-without-block.input';

@InputType()
export class catagoryUpsertWithWhereUniqueWithoutBlockInput {
  @Field(() => catagoryWhereUniqueInput, { nullable: false })
  @Type(() => catagoryWhereUniqueInput)
  where!: catagoryWhereUniqueInput;

  @Field(() => catagoryUpdateWithoutBlockInput, { nullable: false })
  @Type(() => catagoryUpdateWithoutBlockInput)
  update!: catagoryUpdateWithoutBlockInput;

  @Field(() => catagoryCreateWithoutBlockInput, { nullable: false })
  @Type(() => catagoryCreateWithoutBlockInput)
  create!: catagoryCreateWithoutBlockInput;
}
