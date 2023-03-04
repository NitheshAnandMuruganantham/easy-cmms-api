import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ItemsCountOrderByAggregateInput } from './items-count-order-by-aggregate.input';
import { ItemsAvgOrderByAggregateInput } from './items-avg-order-by-aggregate.input';
import { ItemsMaxOrderByAggregateInput } from './items-max-order-by-aggregate.input';
import { ItemsMinOrderByAggregateInput } from './items-min-order-by-aggregate.input';
import { ItemsSumOrderByAggregateInput } from './items-sum-order-by-aggregate.input';

@InputType()
export class ItemsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unit_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    catagory_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ItemsCountOrderByAggregateInput, {nullable:true})
    _count?: ItemsCountOrderByAggregateInput;

    @Field(() => ItemsAvgOrderByAggregateInput, {nullable:true})
    _avg?: ItemsAvgOrderByAggregateInput;

    @Field(() => ItemsMaxOrderByAggregateInput, {nullable:true})
    _max?: ItemsMaxOrderByAggregateInput;

    @Field(() => ItemsMinOrderByAggregateInput, {nullable:true})
    _min?: ItemsMinOrderByAggregateInput;

    @Field(() => ItemsSumOrderByAggregateInput, {nullable:true})
    _sum?: ItemsSumOrderByAggregateInput;
}
