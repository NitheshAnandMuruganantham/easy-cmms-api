import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { block_settingsWhereInput } from '../../block/dto/block-settings/block-settings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyblockSettingsArgs {
  @Field(() => block_settingsWhereInput, { nullable: true })
  @Type(() => block_settingsWhereInput)
  where?: block_settingsWhereInput;
}
