import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { block_settingsWhereUniqueInput } from './block-settings-where-unique.input';
import { Type } from 'class-transformer';
import { block_settingsUpdateWithoutBlockInput } from './block-settings-update-without-block.input';

@InputType()
export class block_settingsUpdateWithWhereUniqueWithoutBlockInput {
  @Field(() => block_settingsWhereUniqueInput, { nullable: false })
  @Type(() => block_settingsWhereUniqueInput)
  where!: block_settingsWhereUniqueInput;

  @Field(() => block_settingsUpdateWithoutBlockInput, { nullable: false })
  @Type(() => block_settingsUpdateWithoutBlockInput)
  data!: block_settingsUpdateWithoutBlockInput;
}
