import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutInvoice_itemsInput } from './block-update-without-invoice-items.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutInvoice_itemsInput } from './block-create-without-invoice-items.input';

@InputType()
export class BlockUpsertWithoutInvoice_itemsInput {
  @Field(() => BlockUpdateWithoutInvoice_itemsInput, { nullable: false })
  @Type(() => BlockUpdateWithoutInvoice_itemsInput)
  update!: BlockUpdateWithoutInvoice_itemsInput;

  @Field(() => BlockCreateWithoutInvoice_itemsInput, { nullable: false })
  @Type(() => BlockCreateWithoutInvoice_itemsInput)
  create!: BlockCreateWithoutInvoice_itemsInput;
}
