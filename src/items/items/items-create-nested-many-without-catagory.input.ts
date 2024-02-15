import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutCatagoryInput } from './items-create-without-catagory.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutCatagoryInput } from './items-create-or-connect-without-catagory.input';
import { ItemsCreateManyCatagoryInputEnvelope } from './items-create-many-catagory-input-envelope.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedManyWithoutCatagoryInput {
  @Field(() => [ItemsCreateWithoutCatagoryInput], { nullable: true })
  @Type(() => ItemsCreateWithoutCatagoryInput)
  create?: Array<ItemsCreateWithoutCatagoryInput>;

  @Field(() => [ItemsCreateOrConnectWithoutCatagoryInput], { nullable: true })
  @Type(() => ItemsCreateOrConnectWithoutCatagoryInput)
  connectOrCreate?: Array<ItemsCreateOrConnectWithoutCatagoryInput>;

  @Field(() => ItemsCreateManyCatagoryInputEnvelope, { nullable: true })
  @Type(() => ItemsCreateManyCatagoryInputEnvelope)
  createMany?: ItemsCreateManyCatagoryInputEnvelope;

  @Field(() => [ItemsWhereUniqueInput], { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  connect?: Array<ItemsWhereUniqueInput>;
}
