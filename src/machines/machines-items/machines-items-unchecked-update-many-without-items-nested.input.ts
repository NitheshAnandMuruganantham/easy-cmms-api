import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsCreateWithoutItemsInput } from './machines-items-create-without-items.input';
import { Type } from 'class-transformer';
import { machines_itemsCreateOrConnectWithoutItemsInput } from './machines-items-create-or-connect-without-items.input';
import { machines_itemsUpsertWithWhereUniqueWithoutItemsInput } from './machines-items-upsert-with-where-unique-without-items.input';
import { machines_itemsCreateManyItemsInputEnvelope } from './machines-items-create-many-items-input-envelope.input';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';
import { machines_itemsUpdateWithWhereUniqueWithoutItemsInput } from './machines-items-update-with-where-unique-without-items.input';
import { machines_itemsUpdateManyWithWhereWithoutItemsInput } from './machines-items-update-many-with-where-without-items.input';
import { machines_itemsScalarWhereInput } from './machines-items-scalar-where.input';

@InputType()
export class machines_itemsUncheckedUpdateManyWithoutItemsNestedInput {
  @Field(() => [machines_itemsCreateWithoutItemsInput], { nullable: true })
  @Type(() => machines_itemsCreateWithoutItemsInput)
  create?: Array<machines_itemsCreateWithoutItemsInput>;

  @Field(() => [machines_itemsCreateOrConnectWithoutItemsInput], {
    nullable: true,
  })
  @Type(() => machines_itemsCreateOrConnectWithoutItemsInput)
  connectOrCreate?: Array<machines_itemsCreateOrConnectWithoutItemsInput>;

  @Field(() => [machines_itemsUpsertWithWhereUniqueWithoutItemsInput], {
    nullable: true,
  })
  @Type(() => machines_itemsUpsertWithWhereUniqueWithoutItemsInput)
  upsert?: Array<machines_itemsUpsertWithWhereUniqueWithoutItemsInput>;

  @Field(() => machines_itemsCreateManyItemsInputEnvelope, { nullable: true })
  @Type(() => machines_itemsCreateManyItemsInputEnvelope)
  createMany?: machines_itemsCreateManyItemsInputEnvelope;

  @Field(() => [machines_itemsWhereUniqueInput], { nullable: true })
  @Type(() => machines_itemsWhereUniqueInput)
  set?: Array<machines_itemsWhereUniqueInput>;

  @Field(() => [machines_itemsWhereUniqueInput], { nullable: true })
  @Type(() => machines_itemsWhereUniqueInput)
  disconnect?: Array<machines_itemsWhereUniqueInput>;

  @Field(() => [machines_itemsWhereUniqueInput], { nullable: true })
  @Type(() => machines_itemsWhereUniqueInput)
  delete?: Array<machines_itemsWhereUniqueInput>;

  @Field(() => [machines_itemsWhereUniqueInput], { nullable: true })
  @Type(() => machines_itemsWhereUniqueInput)
  connect?: Array<machines_itemsWhereUniqueInput>;

  @Field(() => [machines_itemsUpdateWithWhereUniqueWithoutItemsInput], {
    nullable: true,
  })
  @Type(() => machines_itemsUpdateWithWhereUniqueWithoutItemsInput)
  update?: Array<machines_itemsUpdateWithWhereUniqueWithoutItemsInput>;

  @Field(() => [machines_itemsUpdateManyWithWhereWithoutItemsInput], {
    nullable: true,
  })
  @Type(() => machines_itemsUpdateManyWithWhereWithoutItemsInput)
  updateMany?: Array<machines_itemsUpdateManyWithWhereWithoutItemsInput>;

  @Field(() => [machines_itemsScalarWhereInput], { nullable: true })
  @Type(() => machines_itemsScalarWhereInput)
  deleteMany?: Array<machines_itemsScalarWhereInput>;
}
