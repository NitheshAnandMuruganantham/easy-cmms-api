import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { block_settingsCreateManyInput } from '../../block/block-settings/block-settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyblockSettingsArgs {
  @Field(() => [block_settingsCreateManyInput], { nullable: false })
  @Type(() => block_settingsCreateManyInput)
  data!: Array<block_settingsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
