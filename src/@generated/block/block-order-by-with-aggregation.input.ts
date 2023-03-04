import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BlockCountOrderByAggregateInput } from './block-count-order-by-aggregate.input';
import { BlockAvgOrderByAggregateInput } from './block-avg-order-by-aggregate.input';
import { BlockMaxOrderByAggregateInput } from './block-max-order-by-aggregate.input';
import { BlockMinOrderByAggregateInput } from './block-min-order-by-aggregate.input';
import { BlockSumOrderByAggregateInput } from './block-sum-order-by-aggregate.input';

@InputType()
export class BlockOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BlockCountOrderByAggregateInput, {nullable:true})
    _count?: BlockCountOrderByAggregateInput;

    @Field(() => BlockAvgOrderByAggregateInput, {nullable:true})
    _avg?: BlockAvgOrderByAggregateInput;

    @Field(() => BlockMaxOrderByAggregateInput, {nullable:true})
    _max?: BlockMaxOrderByAggregateInput;

    @Field(() => BlockMinOrderByAggregateInput, {nullable:true})
    _min?: BlockMinOrderByAggregateInput;

    @Field(() => BlockSumOrderByAggregateInput, {nullable:true})
    _sum?: BlockSumOrderByAggregateInput;
}
