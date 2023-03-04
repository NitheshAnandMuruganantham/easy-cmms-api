import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReplacementsCountOrderByAggregateInput } from './replacements-count-order-by-aggregate.input';
import { ReplacementsAvgOrderByAggregateInput } from './replacements-avg-order-by-aggregate.input';
import { ReplacementsMaxOrderByAggregateInput } from './replacements-max-order-by-aggregate.input';
import { ReplacementsMinOrderByAggregateInput } from './replacements-min-order-by-aggregate.input';
import { ReplacementsSumOrderByAggregateInput } from './replacements-sum-order-by-aggregate.input';

@InputType()
export class ReplacementsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maintanance_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    approved?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ReplacementsCountOrderByAggregateInput, {nullable:true})
    _count?: ReplacementsCountOrderByAggregateInput;

    @Field(() => ReplacementsAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReplacementsAvgOrderByAggregateInput;

    @Field(() => ReplacementsMaxOrderByAggregateInput, {nullable:true})
    _max?: ReplacementsMaxOrderByAggregateInput;

    @Field(() => ReplacementsMinOrderByAggregateInput, {nullable:true})
    _min?: ReplacementsMinOrderByAggregateInput;

    @Field(() => ReplacementsSumOrderByAggregateInput, {nullable:true})
    _sum?: ReplacementsSumOrderByAggregateInput;
}
