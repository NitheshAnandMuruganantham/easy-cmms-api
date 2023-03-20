import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersOrderByWithRelationAndSearchRelevanceInput } from '../users/users-order-by-with-relation-and-search-relevance.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../block/block-order-by-with-relation-and-search-relevance.input';

@InputType()
export class production_dataOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_run_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_down_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    target_production?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actual_production?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => UsersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    updatedBy?: UsersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BlockOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Block?: BlockOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    blockId?: keyof typeof SortOrder;
}
