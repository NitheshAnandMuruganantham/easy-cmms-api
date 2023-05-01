import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Type } from 'class-transformer';
import { InvoicesUpdateWithoutBlockInput } from './invoices-update-without-block.input';
import { InvoicesCreateWithoutBlockInput } from './invoices-create-without-block.input';

@InputType()
export class InvoicesUpsertWithWhereUniqueWithoutBlockInput {

    @Field(() => InvoicesWhereUniqueInput, {nullable:false})
    @Type(() => InvoicesWhereUniqueInput)
    where!: InvoicesWhereUniqueInput;

    @Field(() => InvoicesUpdateWithoutBlockInput, {nullable:false})
    @Type(() => InvoicesUpdateWithoutBlockInput)
    update!: InvoicesUpdateWithoutBlockInput;

    @Field(() => InvoicesCreateWithoutBlockInput, {nullable:false})
    @Type(() => InvoicesCreateWithoutBlockInput)
    create!: InvoicesCreateWithoutBlockInput;
}
