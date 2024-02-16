import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutItemsInput } from './block-update-without-items.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutItemsInput } from './block-create-without-items.input';

@InputType()
export class BlockUpsertWithoutItemsInput {
  @Field(() => BlockUpdateWithoutItemsInput, { nullable: false })
  @Type(() => BlockUpdateWithoutItemsInput)
  update!: BlockUpdateWithoutItemsInput;

  @Field(() => BlockCreateWithoutItemsInput, { nullable: false })
  @Type(() => BlockCreateWithoutItemsInput)
  create!: BlockCreateWithoutItemsInput;
}
