import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoicesWhereInput } from './invoices-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyInvoicesArgs {

    @Field(() => InvoicesWhereInput, {nullable:true})
    @Type(() => InvoicesWhereInput)
    where?: InvoicesWhereInput;
}
