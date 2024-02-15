import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutItemCatagoryInput } from './items-create-without-item-catagory.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutItemCatagoryInput } from './items-create-or-connect-without-item-catagory.input';
import { ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput } from './items-upsert-with-where-unique-without-item-catagory.input';
import { ItemsCreateManyItemCatagoryInputEnvelope } from './items-create-many-item-catagory-input-envelope.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput } from './items-update-with-where-unique-without-item-catagory.input';
import { ItemsUpdateManyWithWhereWithoutItemCatagoryInput } from './items-update-many-with-where-without-item-catagory.input';
import { ItemsScalarWhereInput } from './items-scalar-where.input';

@InputType()
export class ItemsUpdateManyWithoutItemCatagoryNestedInput {
  @Field(() => [ItemsCreateWithoutItemCatagoryInput], { nullable: true })
  @Type(() => ItemsCreateWithoutItemCatagoryInput)
  create?: Array<ItemsCreateWithoutItemCatagoryInput>;

  @Field(() => [ItemsCreateOrConnectWithoutItemCatagoryInput], {
    nullable: true,
  })
  @Type(() => ItemsCreateOrConnectWithoutItemCatagoryInput)
  connectOrCreate?: Array<ItemsCreateOrConnectWithoutItemCatagoryInput>;

  @Field(() => [ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput], {
    nullable: true,
  })
  @Type(() => ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput)
  upsert?: Array<ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput>;

  @Field(() => ItemsCreateManyItemCatagoryInputEnvelope, { nullable: true })
  @Type(() => ItemsCreateManyItemCatagoryInputEnvelope)
  createMany?: ItemsCreateManyItemCatagoryInputEnvelope;

  @Field(() => [ItemsWhereUniqueInput], { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  set?: Array<ItemsWhereUniqueInput>;

  @Field(() => [ItemsWhereUniqueInput], { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  disconnect?: Array<ItemsWhereUniqueInput>;

  @Field(() => [ItemsWhereUniqueInput], { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  delete?: Array<ItemsWhereUniqueInput>;

  @Field(() => [ItemsWhereUniqueInput], { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  connect?: Array<ItemsWhereUniqueInput>;

  @Field(() => [ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput], {
    nullable: true,
  })
  @Type(() => ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput)
  update?: Array<ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput>;

  @Field(() => [ItemsUpdateManyWithWhereWithoutItemCatagoryInput], {
    nullable: true,
  })
  @Type(() => ItemsUpdateManyWithWhereWithoutItemCatagoryInput)
  updateMany?: Array<ItemsUpdateManyWithWhereWithoutItemCatagoryInput>;

  @Field(() => [ItemsScalarWhereInput], { nullable: true })
  @Type(() => ItemsScalarWhereInput)
  deleteMany?: Array<ItemsScalarWhereInput>;
}
