import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { block_settingsWhereUniqueInput } from '../../block/block-settings/block-settings-where-unique.input';
import { Type } from 'class-transformer';
import { block_settingsCreateInput } from '../../block/block-settings/block-settings-create.input';
import { block_settingsUpdateInput } from '../../block/block-settings/block-settings-update.input';

@ArgsType()
export class UpsertOneblockSettingsArgs {
  @Field(() => block_settingsWhereUniqueInput, { nullable: false })
  @Type(() => block_settingsWhereUniqueInput)
  where!: block_settingsWhereUniqueInput;

  @Field(() => block_settingsCreateInput, { nullable: false })
  @Type(() => block_settingsCreateInput)
  create!: block_settingsCreateInput;

  @Field(() => block_settingsUpdateInput, { nullable: false })
  @Type(() => block_settingsUpdateInput)
  update!: block_settingsUpdateInput;
}
