import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutInvoicesInput } from './block-create-without-invoices.input';

@InputType()
export class BlockCreateOrConnectWithoutInvoicesInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => BlockCreateWithoutInvoicesInput)
    create!: BlockCreateWithoutInvoicesInput;
}
