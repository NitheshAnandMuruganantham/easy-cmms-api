import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutInvoice_itemsInput } from './block-create-without-invoice-items.input';

@InputType()
export class BlockCreateOrConnectWithoutInvoice_itemsInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutInvoice_itemsInput, {nullable:false})
    @Type(() => BlockCreateWithoutInvoice_itemsInput)
    create!: BlockCreateWithoutInvoice_itemsInput;
}
