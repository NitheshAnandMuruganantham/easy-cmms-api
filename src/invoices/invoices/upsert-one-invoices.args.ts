import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Type } from 'class-transformer';
import { InvoicesCreateInput } from './invoices-create.input';
import { InvoicesUpdateInput } from './invoices-update.input';

@ArgsType()
export class UpsertOneInvoicesArgs {

    @Field(() => InvoicesWhereUniqueInput, {nullable:false})
    @Type(() => InvoicesWhereUniqueInput)
    where!: InvoicesWhereUniqueInput;

    @Field(() => InvoicesCreateInput, {nullable:false})
    @Type(() => InvoicesCreateInput)
    create!: InvoicesCreateInput;

    @Field(() => InvoicesUpdateInput, {nullable:false})
    @Type(() => InvoicesUpdateInput)
    update!: InvoicesUpdateInput;
}
