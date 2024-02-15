import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryCreateWithoutItemsInput } from './catagory-create-without-items.input';
import { Type } from 'class-transformer';
import { catagoryCreateOrConnectWithoutItemsInput } from './catagory-create-or-connect-without-items.input';
import { catagoryUpsertWithoutItemsInput } from './catagory-upsert-without-items.input';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';
import { catagoryUpdateWithoutItemsInput } from './catagory-update-without-items.input';

@InputType()
export class catagoryUpdateOneRequiredWithoutItemsNestedInput {
  @Field(() => catagoryCreateWithoutItemsInput, { nullable: true })
  @Type(() => catagoryCreateWithoutItemsInput)
  create?: catagoryCreateWithoutItemsInput;

  @Field(() => catagoryCreateOrConnectWithoutItemsInput, { nullable: true })
  @Type(() => catagoryCreateOrConnectWithoutItemsInput)
  connectOrCreate?: catagoryCreateOrConnectWithoutItemsInput;

  @Field(() => catagoryUpsertWithoutItemsInput, { nullable: true })
  @Type(() => catagoryUpsertWithoutItemsInput)
  upsert?: catagoryUpsertWithoutItemsInput;

  @Field(() => catagoryWhereUniqueInput, { nullable: true })
  @Type(() => catagoryWhereUniqueInput)
  connect?: catagoryWhereUniqueInput;

  @Field(() => catagoryUpdateWithoutItemsInput, { nullable: true })
  @Type(() => catagoryUpdateWithoutItemsInput)
  update?: catagoryUpdateWithoutItemsInput;
}
