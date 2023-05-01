import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesOrderByRelevanceFieldEnum } from './invoices-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class InvoicesOrderByRelevanceInput {

    @Field(() => [InvoicesOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof InvoicesOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
