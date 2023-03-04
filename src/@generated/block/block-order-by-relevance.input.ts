import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockOrderByRelevanceFieldEnum } from './block-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BlockOrderByRelevanceInput {

    @Field(() => [BlockOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof BlockOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
