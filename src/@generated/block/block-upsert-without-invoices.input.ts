import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutInvoicesInput } from './block-update-without-invoices.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutInvoicesInput } from './block-create-without-invoices.input';

@InputType()
export class BlockUpsertWithoutInvoicesInput {

    @Field(() => BlockUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => BlockUpdateWithoutInvoicesInput)
    update!: BlockUpdateWithoutInvoicesInput;

    @Field(() => BlockCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => BlockCreateWithoutInvoicesInput)
    create!: BlockCreateWithoutInvoicesInput;
}
