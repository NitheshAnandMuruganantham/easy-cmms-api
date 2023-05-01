import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoicesCreateInput } from './invoices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneInvoicesArgs {

    @Field(() => InvoicesCreateInput, {nullable:false})
    @Type(() => InvoicesCreateInput)
    data!: InvoicesCreateInput;
}
