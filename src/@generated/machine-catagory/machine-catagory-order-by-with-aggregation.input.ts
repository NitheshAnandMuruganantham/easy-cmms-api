import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { machine_catagoryCountOrderByAggregateInput } from './machine-catagory-count-order-by-aggregate.input';
import { machine_catagoryAvgOrderByAggregateInput } from './machine-catagory-avg-order-by-aggregate.input';
import { machine_catagoryMaxOrderByAggregateInput } from './machine-catagory-max-order-by-aggregate.input';
import { machine_catagoryMinOrderByAggregateInput } from './machine-catagory-min-order-by-aggregate.input';
import { machine_catagorySumOrderByAggregateInput } from './machine-catagory-sum-order-by-aggregate.input';

@InputType()
export class machine_catagoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => machine_catagoryCountOrderByAggregateInput, {nullable:true})
    _count?: machine_catagoryCountOrderByAggregateInput;

    @Field(() => machine_catagoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: machine_catagoryAvgOrderByAggregateInput;

    @Field(() => machine_catagoryMaxOrderByAggregateInput, {nullable:true})
    _max?: machine_catagoryMaxOrderByAggregateInput;

    @Field(() => machine_catagoryMinOrderByAggregateInput, {nullable:true})
    _min?: machine_catagoryMinOrderByAggregateInput;

    @Field(() => machine_catagorySumOrderByAggregateInput, {nullable:true})
    _sum?: machine_catagorySumOrderByAggregateInput;
}
