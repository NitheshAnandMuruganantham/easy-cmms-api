import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoicesWhereInput } from './invoices-where.input';
import { Type } from 'class-transformer';
import { InvoicesOrderByWithRelationAndSearchRelevanceInput } from './invoices-order-by-with-relation-and-search-relevance.input';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InvoicesScalarFieldEnum } from './invoices-scalar-field.enum';

@ArgsType()
export class FindFirstInvoicesArgs {

    @Field(() => InvoicesWhereInput, {nullable:true})
    @Type(() => InvoicesWhereInput)
    where?: InvoicesWhereInput;

    @Field(() => [InvoicesOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<InvoicesOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => InvoicesWhereUniqueInput, {nullable:true})
    cursor?: InvoicesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InvoicesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof InvoicesScalarFieldEnum>;
}
