import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutInvoice_itemsInput } from './block-create-without-invoice-items.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutInvoice_itemsInput } from './block-create-or-connect-without-invoice-items.input';
import { BlockUpsertWithoutInvoice_itemsInput } from './block-upsert-without-invoice-items.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutInvoice_itemsInput } from './block-update-without-invoice-items.input';

@InputType()
export class BlockUpdateOneRequiredWithoutInvoice_itemsNestedInput {

    @Field(() => BlockCreateWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => BlockCreateWithoutInvoice_itemsInput)
    create?: BlockCreateWithoutInvoice_itemsInput;

    @Field(() => BlockCreateOrConnectWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutInvoice_itemsInput)
    connectOrCreate?: BlockCreateOrConnectWithoutInvoice_itemsInput;

    @Field(() => BlockUpsertWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => BlockUpsertWithoutInvoice_itemsInput)
    upsert?: BlockUpsertWithoutInvoice_itemsInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;

    @Field(() => BlockUpdateWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => BlockUpdateWithoutInvoice_itemsInput)
    update?: BlockUpdateWithoutInvoice_itemsInput;
}
