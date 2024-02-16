import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { block_settingsCreateInput } from '../../block/dto/block-settings/block-settings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneblockSettingsArgs {
  @Field(() => block_settingsCreateInput, { nullable: false })
  @Type(() => block_settingsCreateInput)
  data!: block_settingsCreateInput;
}
