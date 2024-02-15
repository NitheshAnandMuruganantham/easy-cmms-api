import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutInvoicesInput } from './block-create-without-invoices.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutInvoicesInput } from './block-create-or-connect-without-invoices.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutInvoicesInput {

    @Field(() => BlockCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => BlockCreateWithoutInvoicesInput)
    create?: BlockCreateWithoutInvoicesInput;

    @Field(() => BlockCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: BlockCreateOrConnectWithoutInvoicesInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;
}
