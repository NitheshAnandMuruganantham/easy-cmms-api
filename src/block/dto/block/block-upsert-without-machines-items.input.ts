import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutMachines_itemsInput } from './block-update-without-machines-items.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutMachines_itemsInput } from './block-create-without-machines-items.input';

@InputType()
export class BlockUpsertWithoutMachines_itemsInput {
  @Field(() => BlockUpdateWithoutMachines_itemsInput, { nullable: false })
  @Type(() => BlockUpdateWithoutMachines_itemsInput)
  update!: BlockUpdateWithoutMachines_itemsInput;

  @Field(() => BlockCreateWithoutMachines_itemsInput, { nullable: false })
  @Type(() => BlockCreateWithoutMachines_itemsInput)
  create!: BlockCreateWithoutMachines_itemsInput;
}
