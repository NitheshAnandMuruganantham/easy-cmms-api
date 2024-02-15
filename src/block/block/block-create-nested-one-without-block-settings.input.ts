import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutBlock_settingsInput } from './block-create-without-block-settings.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutBlock_settingsInput } from './block-create-or-connect-without-block-settings.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutBlock_settingsInput {
  @Field(() => BlockCreateWithoutBlock_settingsInput, { nullable: true })
  @Type(() => BlockCreateWithoutBlock_settingsInput)
  create?: BlockCreateWithoutBlock_settingsInput;

  @Field(() => BlockCreateOrConnectWithoutBlock_settingsInput, {
    nullable: true,
  })
  @Type(() => BlockCreateOrConnectWithoutBlock_settingsInput)
  connectOrCreate?: BlockCreateOrConnectWithoutBlock_settingsInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;
}
