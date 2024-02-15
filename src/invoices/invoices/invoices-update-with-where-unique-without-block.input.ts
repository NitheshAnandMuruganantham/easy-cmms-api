import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Type } from 'class-transformer';
import { InvoicesUpdateWithoutBlockInput } from './invoices-update-without-block.input';

@InputType()
export class InvoicesUpdateWithWhereUniqueWithoutBlockInput {

    @Field(() => InvoicesWhereUniqueInput, {nullable:false})
    @Type(() => InvoicesWhereUniqueInput)
    where!: InvoicesWhereUniqueInput;

    @Field(() => InvoicesUpdateWithoutBlockInput, {nullable:false})
    @Type(() => InvoicesUpdateWithoutBlockInput)
    data!: InvoicesUpdateWithoutBlockInput;
}
