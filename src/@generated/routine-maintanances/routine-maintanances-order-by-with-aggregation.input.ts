import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { routine_maintanancesCountOrderByAggregateInput } from './routine-maintanances-count-order-by-aggregate.input';
import { routine_maintanancesAvgOrderByAggregateInput } from './routine-maintanances-avg-order-by-aggregate.input';
import { routine_maintanancesMaxOrderByAggregateInput } from './routine-maintanances-max-order-by-aggregate.input';
import { routine_maintanancesMinOrderByAggregateInput } from './routine-maintanances-min-order-by-aggregate.input';
import { routine_maintanancesSumOrderByAggregateInput } from './routine-maintanances-sum-order-by-aggregate.input';

@InputType()
export class routine_maintanancesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cron?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignee_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meachine_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @HideField()
    block_id?: keyof typeof SortOrder;

    @Field(() => routine_maintanancesCountOrderByAggregateInput, {nullable:true})
    _count?: routine_maintanancesCountOrderByAggregateInput;

    @Field(() => routine_maintanancesAvgOrderByAggregateInput, {nullable:true})
    _avg?: routine_maintanancesAvgOrderByAggregateInput;

    @Field(() => routine_maintanancesMaxOrderByAggregateInput, {nullable:true})
    _max?: routine_maintanancesMaxOrderByAggregateInput;

    @Field(() => routine_maintanancesMinOrderByAggregateInput, {nullable:true})
    _min?: routine_maintanancesMinOrderByAggregateInput;

    @Field(() => routine_maintanancesSumOrderByAggregateInput, {nullable:true})
    _sum?: routine_maintanancesSumOrderByAggregateInput;
}
