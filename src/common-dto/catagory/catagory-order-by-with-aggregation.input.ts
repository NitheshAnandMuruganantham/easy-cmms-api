import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { catagoryCountOrderByAggregateInput } from './catagory-count-order-by-aggregate.input';
import { catagoryAvgOrderByAggregateInput } from './catagory-avg-order-by-aggregate.input';
import { catagoryMaxOrderByAggregateInput } from './catagory-max-order-by-aggregate.input';
import { catagoryMinOrderByAggregateInput } from './catagory-min-order-by-aggregate.input';
import { catagorySumOrderByAggregateInput } from './catagory-sum-order-by-aggregate.input';

@InputType()
export class catagoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @HideField()
    block_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => catagoryCountOrderByAggregateInput, {nullable:true})
    _count?: catagoryCountOrderByAggregateInput;

    @Field(() => catagoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: catagoryAvgOrderByAggregateInput;

    @Field(() => catagoryMaxOrderByAggregateInput, {nullable:true})
    _max?: catagoryMaxOrderByAggregateInput;

    @Field(() => catagoryMinOrderByAggregateInput, {nullable:true})
    _min?: catagoryMinOrderByAggregateInput;

    @Field(() => catagorySumOrderByAggregateInput, {nullable:true})
    _sum?: catagorySumOrderByAggregateInput;
}
