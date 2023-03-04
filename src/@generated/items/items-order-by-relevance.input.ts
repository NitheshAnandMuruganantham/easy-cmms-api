import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsOrderByRelevanceFieldEnum } from './items-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ItemsOrderByRelevanceInput {

    @Field(() => [ItemsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof ItemsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
