import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryCreateWithoutItemsInput } from './catagory-create-without-items.input';
import { Type } from 'class-transformer';
import { catagoryCreateOrConnectWithoutItemsInput } from './catagory-create-or-connect-without-items.input';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';

@InputType()
export class catagoryCreateNestedOneWithoutItemsInput {
  @Field(() => catagoryCreateWithoutItemsInput, { nullable: true })
  @Type(() => catagoryCreateWithoutItemsInput)
  create?: catagoryCreateWithoutItemsInput;

  @Field(() => catagoryCreateOrConnectWithoutItemsInput, { nullable: true })
  @Type(() => catagoryCreateOrConnectWithoutItemsInput)
  connectOrCreate?: catagoryCreateOrConnectWithoutItemsInput;

  @Field(() => catagoryWhereUniqueInput, { nullable: true })
  @Type(() => catagoryWhereUniqueInput)
  connect?: catagoryWhereUniqueInput;
}
