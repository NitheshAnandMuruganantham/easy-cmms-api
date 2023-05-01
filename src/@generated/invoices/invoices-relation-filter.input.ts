import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesWhereInput } from './invoices-where.input';

@InputType()
export class InvoicesRelationFilter {

    @Field(() => InvoicesWhereInput, {nullable:true})
    is?: InvoicesWhereInput;

    @Field(() => InvoicesWhereInput, {nullable:true})
    isNot?: InvoicesWhereInput;
}
