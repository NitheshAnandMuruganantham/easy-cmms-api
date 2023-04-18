import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { machines_itemsCountOrderByAggregateInput } from './machines-items-count-order-by-aggregate.input';
import { machines_itemsAvgOrderByAggregateInput } from './machines-items-avg-order-by-aggregate.input';
import { machines_itemsMaxOrderByAggregateInput } from './machines-items-max-order-by-aggregate.input';
import { machines_itemsMinOrderByAggregateInput } from './machines-items-min-order-by-aggregate.input';
import { machines_itemsSumOrderByAggregateInput } from './machines-items-sum-order-by-aggregate.input';

@InputType()
export class machines_itemsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    machine_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @HideField()
    block_id?: keyof typeof SortOrder;

    @Field(() => machines_itemsCountOrderByAggregateInput, {nullable:true})
    _count?: machines_itemsCountOrderByAggregateInput;

    @Field(() => machines_itemsAvgOrderByAggregateInput, {nullable:true})
    _avg?: machines_itemsAvgOrderByAggregateInput;

    @Field(() => machines_itemsMaxOrderByAggregateInput, {nullable:true})
    _max?: machines_itemsMaxOrderByAggregateInput;

    @Field(() => machines_itemsMinOrderByAggregateInput, {nullable:true})
    _min?: machines_itemsMinOrderByAggregateInput;

    @Field(() => machines_itemsSumOrderByAggregateInput, {nullable:true})
    _sum?: machines_itemsSumOrderByAggregateInput;
}
