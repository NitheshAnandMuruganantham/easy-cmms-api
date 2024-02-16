import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutBlockInput } from './items-create-without-block.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutBlockInput } from './items-create-or-connect-without-block.input';
import { ItemsCreateManyBlockInputEnvelope } from './items-create-many-block-input-envelope.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedManyWithoutBlockInput {
  @Field(() => [ItemsCreateWithoutBlockInput], { nullable: true })
  @Type(() => ItemsCreateWithoutBlockInput)
  create?: Array<ItemsCreateWithoutBlockInput>;

  @Field(() => [ItemsCreateOrConnectWithoutBlockInput], { nullable: true })
  @Type(() => ItemsCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<ItemsCreateOrConnectWithoutBlockInput>;

  @Field(() => ItemsCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => ItemsCreateManyBlockInputEnvelope)
  createMany?: ItemsCreateManyBlockInputEnvelope;

  @Field(() => [ItemsWhereUniqueInput], { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  connect?: Array<ItemsWhereUniqueInput>;
}
