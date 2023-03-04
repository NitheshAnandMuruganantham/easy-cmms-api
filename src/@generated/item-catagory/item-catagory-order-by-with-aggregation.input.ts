import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ItemCatagoryCountOrderByAggregateInput } from './item-catagory-count-order-by-aggregate.input';
import { ItemCatagoryAvgOrderByAggregateInput } from './item-catagory-avg-order-by-aggregate.input';
import { ItemCatagoryMaxOrderByAggregateInput } from './item-catagory-max-order-by-aggregate.input';
import { ItemCatagoryMinOrderByAggregateInput } from './item-catagory-min-order-by-aggregate.input';
import { ItemCatagorySumOrderByAggregateInput } from './item-catagory-sum-order-by-aggregate.input';

@InputType()
export class ItemCatagoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ItemCatagoryCountOrderByAggregateInput, {nullable:true})
    _count?: ItemCatagoryCountOrderByAggregateInput;

    @Field(() => ItemCatagoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: ItemCatagoryAvgOrderByAggregateInput;

    @Field(() => ItemCatagoryMaxOrderByAggregateInput, {nullable:true})
    _max?: ItemCatagoryMaxOrderByAggregateInput;

    @Field(() => ItemCatagoryMinOrderByAggregateInput, {nullable:true})
    _min?: ItemCatagoryMinOrderByAggregateInput;

    @Field(() => ItemCatagorySumOrderByAggregateInput, {nullable:true})
    _sum?: ItemCatagorySumOrderByAggregateInput;
}
