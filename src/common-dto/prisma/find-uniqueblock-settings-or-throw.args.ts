import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { block_settingsWhereUniqueInput } from '../../block/dto/block-settings/block-settings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueblockSettingsOrThrowArgs {
  @Field(() => block_settingsWhereUniqueInput, { nullable: false })
  @Type(() => block_settingsWhereUniqueInput)
  where!: block_settingsWhereUniqueInput;
}
