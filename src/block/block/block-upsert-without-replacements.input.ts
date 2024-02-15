import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutReplacementsInput } from './block-update-without-replacements.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutReplacementsInput } from './block-create-without-replacements.input';

@InputType()
export class BlockUpsertWithoutReplacementsInput {
  @Field(() => BlockUpdateWithoutReplacementsInput, { nullable: false })
  @Type(() => BlockUpdateWithoutReplacementsInput)
  update!: BlockUpdateWithoutReplacementsInput;

  @Field(() => BlockCreateWithoutReplacementsInput, { nullable: false })
  @Type(() => BlockCreateWithoutReplacementsInput)
  create!: BlockCreateWithoutReplacementsInput;
}
