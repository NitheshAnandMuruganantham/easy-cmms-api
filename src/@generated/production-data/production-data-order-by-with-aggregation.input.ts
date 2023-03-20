import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { production_dataCountOrderByAggregateInput } from './production-data-count-order-by-aggregate.input';
import { production_dataAvgOrderByAggregateInput } from './production-data-avg-order-by-aggregate.input';
import { production_dataMaxOrderByAggregateInput } from './production-data-max-order-by-aggregate.input';
import { production_dataMinOrderByAggregateInput } from './production-data-min-order-by-aggregate.input';
import { production_dataSumOrderByAggregateInput } from './production-data-sum-order-by-aggregate.input';

@InputType()
export class production_dataOrderByWithAggregationInput {

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

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    blockId?: keyof typeof SortOrder;

    @Field(() => production_dataCountOrderByAggregateInput, {nullable:true})
    _count?: production_dataCountOrderByAggregateInput;

    @Field(() => production_dataAvgOrderByAggregateInput, {nullable:true})
    _avg?: production_dataAvgOrderByAggregateInput;

    @Field(() => production_dataMaxOrderByAggregateInput, {nullable:true})
    _max?: production_dataMaxOrderByAggregateInput;

    @Field(() => production_dataMinOrderByAggregateInput, {nullable:true})
    _min?: production_dataMinOrderByAggregateInput;

    @Field(() => production_dataSumOrderByAggregateInput, {nullable:true})
    _sum?: production_dataSumOrderByAggregateInput;
}
