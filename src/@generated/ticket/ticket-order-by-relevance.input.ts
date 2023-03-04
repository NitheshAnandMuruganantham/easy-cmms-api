import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketOrderByRelevanceFieldEnum } from './ticket-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TicketOrderByRelevanceInput {

    @Field(() => [TicketOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof TicketOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
