import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersOrderByWithRelationAndSearchRelevanceInput } from '../users/users-order-by-with-relation-and-search-relevance.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../block/block-order-by-with-relation-and-search-relevance.input';
import { production_dataOrderByRelevanceInput } from './production-data-order-by-relevance.input';

@InputType()
export class production_dataOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    production?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shift?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    blockId?: keyof typeof SortOrder;

    @Field(() => UsersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    updatedBy?: UsersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => BlockOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Block?: BlockOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => production_dataOrderByRelevanceInput, {nullable:true})
    _relevance?: production_dataOrderByRelevanceInput;
}
