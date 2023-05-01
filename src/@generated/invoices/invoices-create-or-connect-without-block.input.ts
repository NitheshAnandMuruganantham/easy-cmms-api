import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Type } from 'class-transformer';
import { InvoicesCreateWithoutBlockInput } from './invoices-create-without-block.input';

@InputType()
export class InvoicesCreateOrConnectWithoutBlockInput {

    @Field(() => InvoicesWhereUniqueInput, {nullable:false})
    @Type(() => InvoicesWhereUniqueInput)
    where!: InvoicesWhereUniqueInput;

    @Field(() => InvoicesCreateWithoutBlockInput, {nullable:false})
    @Type(() => InvoicesCreateWithoutBlockInput)
    create!: InvoicesCreateWithoutBlockInput;
}
