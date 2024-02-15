import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutBlockInput } from './items-create-without-block.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutBlockInput } from './items-create-or-connect-without-block.input';
import { ItemsUpsertWithWhereUniqueWithoutBlockInput } from './items-upsert-with-where-unique-without-block.input';
import { ItemsCreateManyBlockInputEnvelope } from './items-create-many-block-input-envelope.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateWithWhereUniqueWithoutBlockInput } from './items-update-with-where-unique-without-block.input';
import { ItemsUpdateManyWithWhereWithoutBlockInput } from './items-update-many-with-where-without-block.input';
import { ItemsScalarWhereInput } from './items-scalar-where.input';

@InputType()
export class ItemsUpdateManyWithoutBlockNestedInput {
  @Field(() => [ItemsCreateWithoutBlockInput], { nullable: true })
  @Type(() => ItemsCreateWithoutBlockInput)
  create?: Array<ItemsCreateWithoutBlockInput>;

  @Field(() => [ItemsCreateOrConnectWithoutBlockInput], { nullable: true })
  @Type(() => ItemsCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<ItemsCreateOrConnectWithoutBlockInput>;

  @Field(() => [ItemsUpsertWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => ItemsUpsertWithWhereUniqueWithoutBlockInput)
  upsert?: Array<ItemsUpsertWithWhereUniqueWithoutBlockInput>;

  @Field(() => ItemsCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => ItemsCreateManyBlockInputEnvelope)
  createMany?: ItemsCreateManyBlockInputEnvelope;

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

  @Field(() => [ItemsUpdateWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => ItemsUpdateWithWhereUniqueWithoutBlockInput)
  update?: Array<ItemsUpdateWithWhereUniqueWithoutBlockInput>;

  @Field(() => [ItemsUpdateManyWithWhereWithoutBlockInput], { nullable: true })
  @Type(() => ItemsUpdateManyWithWhereWithoutBlockInput)
  updateMany?: Array<ItemsUpdateManyWithWhereWithoutBlockInput>;

  @Field(() => [ItemsScalarWhereInput], { nullable: true })
  @Type(() => ItemsScalarWhereInput)
  deleteMany?: Array<ItemsScalarWhereInput>;
}
