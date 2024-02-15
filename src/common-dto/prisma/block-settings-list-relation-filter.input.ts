import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { block_settingsWhereInput } from '../../block/block-settings/block-settings-where.input';

@InputType()
export class Block_settingsListRelationFilter {
  @Field(() => block_settingsWhereInput, { nullable: true })
  every?: block_settingsWhereInput;

  @Field(() => block_settingsWhereInput, { nullable: true })
  some?: block_settingsWhereInput;

  @Field(() => block_settingsWhereInput, { nullable: true })
  none?: block_settingsWhereInput;
}
