import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { MaintenanceCountOrderByAggregateInput } from './maintenance-count-order-by-aggregate.input';
import { MaintenanceAvgOrderByAggregateInput } from './maintenance-avg-order-by-aggregate.input';
import { MaintenanceMaxOrderByAggregateInput } from './maintenance-max-order-by-aggregate.input';
import { MaintenanceMinOrderByAggregateInput } from './maintenance-min-order-by-aggregate.input';
import { MaintenanceSumOrderByAggregateInput } from './maintenance-sum-order-by-aggregate.input';

@InputType()
export class MaintenanceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    photo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resolved?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    un_planned?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    elapsed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignee_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    machine_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @HideField()
    block_id?: keyof typeof SortOrder;

    @Field(() => MaintenanceCountOrderByAggregateInput, {nullable:true})
    _count?: MaintenanceCountOrderByAggregateInput;

    @Field(() => MaintenanceAvgOrderByAggregateInput, {nullable:true})
    _avg?: MaintenanceAvgOrderByAggregateInput;

    @Field(() => MaintenanceMaxOrderByAggregateInput, {nullable:true})
    _max?: MaintenanceMaxOrderByAggregateInput;

    @Field(() => MaintenanceMinOrderByAggregateInput, {nullable:true})
    _min?: MaintenanceMinOrderByAggregateInput;

    @Field(() => MaintenanceSumOrderByAggregateInput, {nullable:true})
    _sum?: MaintenanceSumOrderByAggregateInput;
}
