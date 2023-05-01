import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutInvoice_itemsInput } from './block-create-without-invoice-items.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutInvoice_itemsInput } from './block-create-or-connect-without-invoice-items.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutInvoice_itemsInput {

    @Field(() => BlockCreateWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => BlockCreateWithoutInvoice_itemsInput)
    create?: BlockCreateWithoutInvoice_itemsInput;

    @Field(() => BlockCreateOrConnectWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutInvoice_itemsInput)
    connectOrCreate?: BlockCreateOrConnectWithoutInvoice_itemsInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;
}
