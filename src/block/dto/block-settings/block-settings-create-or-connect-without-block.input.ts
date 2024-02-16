import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { block_settingsWhereUniqueInput } from './block-settings-where-unique.input';
import { Type } from 'class-transformer';
import { block_settingsCreateWithoutBlockInput } from './block-settings-create-without-block.input';

@InputType()
export class block_settingsCreateOrConnectWithoutBlockInput {
  @Field(() => block_settingsWhereUniqueInput, { nullable: false })
  @Type(() => block_settingsWhereUniqueInput)
  where!: block_settingsWhereUniqueInput;

  @Field(() => block_settingsCreateWithoutBlockInput, { nullable: false })
  @Type(() => block_settingsCreateWithoutBlockInput)
  create!: block_settingsCreateWithoutBlockInput;
}
