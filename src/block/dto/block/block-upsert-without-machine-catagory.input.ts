import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutMachine_catagoryInput } from './block-update-without-machine-catagory.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutMachine_catagoryInput } from './block-create-without-machine-catagory.input';

@InputType()
export class BlockUpsertWithoutMachine_catagoryInput {
  @Field(() => BlockUpdateWithoutMachine_catagoryInput, { nullable: false })
  @Type(() => BlockUpdateWithoutMachine_catagoryInput)
  update!: BlockUpdateWithoutMachine_catagoryInput;

  @Field(() => BlockCreateWithoutMachine_catagoryInput, { nullable: false })
  @Type(() => BlockCreateWithoutMachine_catagoryInput)
  create!: BlockCreateWithoutMachine_catagoryInput;
}
