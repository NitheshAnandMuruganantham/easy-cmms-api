import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';
import { Type } from 'class-transformer';
import { catagoryCreateWithoutBlockInput } from './catagory-create-without-block.input';

@InputType()
export class catagoryCreateOrConnectWithoutBlockInput {
  @Field(() => catagoryWhereUniqueInput, { nullable: false })
  @Type(() => catagoryWhereUniqueInput)
  where!: catagoryWhereUniqueInput;

  @Field(() => catagoryCreateWithoutBlockInput, { nullable: false })
  @Type(() => catagoryCreateWithoutBlockInput)
  create!: catagoryCreateWithoutBlockInput;
}
