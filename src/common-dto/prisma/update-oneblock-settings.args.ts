import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { block_settingsUpdateInput } from '../../block/block-settings/block-settings-update.input';
import { Type } from 'class-transformer';
import { block_settingsWhereUniqueInput } from '../../block/block-settings/block-settings-where-unique.input';

@ArgsType()
export class UpdateOneblockSettingsArgs {
  @Field(() => block_settingsUpdateInput, { nullable: false })
  @Type(() => block_settingsUpdateInput)
  data!: block_settingsUpdateInput;

  @Field(() => block_settingsWhereUniqueInput, { nullable: false })
  @Type(() => block_settingsWhereUniqueInput)
  where!: block_settingsWhereUniqueInput;
}
