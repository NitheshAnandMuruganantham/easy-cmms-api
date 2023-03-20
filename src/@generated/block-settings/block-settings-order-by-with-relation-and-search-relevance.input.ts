import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../block/block-order-by-with-relation-and-search-relevance.input';
import { block_settingsOrderByRelevanceInput } from './block-settings-order-by-relevance.input';

@InputType()
export class block_settingsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    block_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BlockOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    block?: BlockOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => block_settingsOrderByRelevanceInput, {nullable:true})
    _relevance?: block_settingsOrderByRelevanceInput;
}
