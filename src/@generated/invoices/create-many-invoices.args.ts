import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoicesCreateManyInput } from './invoices-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyInvoicesArgs {

    @Field(() => [InvoicesCreateManyInput], {nullable:false})
    @Type(() => InvoicesCreateManyInput)
    data!: Array<InvoicesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
