import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { block_settingsCreateWithoutBlockInput } from './block-settings-create-without-block.input';
import { Type } from 'class-transformer';
import { block_settingsCreateOrConnectWithoutBlockInput } from './block-settings-create-or-connect-without-block.input';
import { block_settingsCreateManyBlockInputEnvelope } from './block-settings-create-many-block-input-envelope.input';
import { block_settingsWhereUniqueInput } from './block-settings-where-unique.input';

@InputType()
export class block_settingsUncheckedCreateNestedManyWithoutBlockInput {
  @Field(() => [block_settingsCreateWithoutBlockInput], { nullable: true })
  @Type(() => block_settingsCreateWithoutBlockInput)
  create?: Array<block_settingsCreateWithoutBlockInput>;

  @Field(() => [block_settingsCreateOrConnectWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => block_settingsCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<block_settingsCreateOrConnectWithoutBlockInput>;

  @Field(() => block_settingsCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => block_settingsCreateManyBlockInputEnvelope)
  createMany?: block_settingsCreateManyBlockInputEnvelope;

  @Field(() => [block_settingsWhereUniqueInput], { nullable: true })
  @Type(() => block_settingsWhereUniqueInput)
  connect?: Array<block_settingsWhereUniqueInput>;
}
