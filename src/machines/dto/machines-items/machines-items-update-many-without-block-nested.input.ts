import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsCreateWithoutBlockInput } from './machines-items-create-without-block.input';
import { Type } from 'class-transformer';
import { machines_itemsCreateOrConnectWithoutBlockInput } from './machines-items-create-or-connect-without-block.input';
import { machines_itemsUpsertWithWhereUniqueWithoutBlockInput } from './machines-items-upsert-with-where-unique-without-block.input';
import { machines_itemsCreateManyBlockInputEnvelope } from './machines-items-create-many-block-input-envelope.input';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';
import { machines_itemsUpdateWithWhereUniqueWithoutBlockInput } from './machines-items-update-with-where-unique-without-block.input';
import { machines_itemsUpdateManyWithWhereWithoutBlockInput } from './machines-items-update-many-with-where-without-block.input';
import { machines_itemsScalarWhereInput } from './machines-items-scalar-where.input';

@InputType()
export class machines_itemsUpdateManyWithoutBlockNestedInput {
  @Field(() => [machines_itemsCreateWithoutBlockInput], { nullable: true })
  @Type(() => machines_itemsCreateWithoutBlockInput)
  create?: Array<machines_itemsCreateWithoutBlockInput>;

  @Field(() => [machines_itemsCreateOrConnectWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => machines_itemsCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<machines_itemsCreateOrConnectWithoutBlockInput>;

  @Field(() => [machines_itemsUpsertWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => machines_itemsUpsertWithWhereUniqueWithoutBlockInput)
  upsert?: Array<machines_itemsUpsertWithWhereUniqueWithoutBlockInput>;

  @Field(() => machines_itemsCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => machines_itemsCreateManyBlockInputEnvelope)
  createMany?: machines_itemsCreateManyBlockInputEnvelope;

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

  @Field(() => [machines_itemsUpdateWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => machines_itemsUpdateWithWhereUniqueWithoutBlockInput)
  update?: Array<machines_itemsUpdateWithWhereUniqueWithoutBlockInput>;

  @Field(() => [machines_itemsUpdateManyWithWhereWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => machines_itemsUpdateManyWithWhereWithoutBlockInput)
  updateMany?: Array<machines_itemsUpdateManyWithWhereWithoutBlockInput>;

  @Field(() => [machines_itemsScalarWhereInput], { nullable: true })
  @Type(() => machines_itemsScalarWhereInput)
  deleteMany?: Array<machines_itemsScalarWhereInput>;
}
