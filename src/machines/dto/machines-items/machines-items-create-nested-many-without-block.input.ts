import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsCreateWithoutBlockInput } from './machines-items-create-without-block.input';
import { Type } from 'class-transformer';
import { machines_itemsCreateOrConnectWithoutBlockInput } from './machines-items-create-or-connect-without-block.input';
import { machines_itemsCreateManyBlockInputEnvelope } from './machines-items-create-many-block-input-envelope.input';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';

@InputType()
export class machines_itemsCreateNestedManyWithoutBlockInput {
  @Field(() => [machines_itemsCreateWithoutBlockInput], { nullable: true })
  @Type(() => machines_itemsCreateWithoutBlockInput)
  create?: Array<machines_itemsCreateWithoutBlockInput>;

  @Field(() => [machines_itemsCreateOrConnectWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => machines_itemsCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<machines_itemsCreateOrConnectWithoutBlockInput>;

  @Field(() => machines_itemsCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => machines_itemsCreateManyBlockInputEnvelope)
  createMany?: machines_itemsCreateManyBlockInputEnvelope;

  @Field(() => [machines_itemsWhereUniqueInput], { nullable: true })
  @Type(() => machines_itemsWhereUniqueInput)
  connect?: Array<machines_itemsWhereUniqueInput>;
}
