import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueInvoicesOrThrowArgs {

    @Field(() => InvoicesWhereUniqueInput, {nullable:false})
    @Type(() => InvoicesWhereUniqueInput)
    where!: InvoicesWhereUniqueInput;
}
