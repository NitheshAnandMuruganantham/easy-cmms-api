import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ItemsOrderByRelationAggregateInput } from '../items/items-order-by-relation-aggregate.input';
import { catagoryOrderByRelevanceInput } from './catagory-order-by-relevance.input';

@InputType()
export class catagoryOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ItemsOrderByRelationAggregateInput, {nullable:true})
    items?: ItemsOrderByRelationAggregateInput;

    @Field(() => catagoryOrderByRelevanceInput, {nullable:true})
    _relevance?: catagoryOrderByRelevanceInput;
}
