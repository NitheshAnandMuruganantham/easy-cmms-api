import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../block/block-order-by-with-relation-and-search-relevance.input';
import { MaintenanceOrderByRelationAggregateInput } from '../maintenance/maintenance-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../ticket/ticket-order-by-relation-aggregate.input';
import { routine_maintanancesOrderByRelationAggregateInput } from '../routine-maintanances/routine-maintanances-order-by-relation-aggregate.input';
import { production_dataOrderByRelationAggregateInput } from '../production-data/production-data-order-by-relation-aggregate.input';
import { UsersOrderByRelevanceInput } from './users-order-by-relevance.input';

@InputType()
export class UsersOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_auth_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    blockId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    extra_roles?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role_alias?: keyof typeof SortOrder;

    @Field(() => BlockOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    block?: BlockOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => MaintenanceOrderByRelationAggregateInput, {nullable:true})
    maintenance?: MaintenanceOrderByRelationAggregateInput;

    @Field(() => TicketOrderByRelationAggregateInput, {nullable:true})
    ticket?: TicketOrderByRelationAggregateInput;

    @Field(() => routine_maintanancesOrderByRelationAggregateInput, {nullable:true})
    routine_maintanances?: routine_maintanancesOrderByRelationAggregateInput;

    @Field(() => production_dataOrderByRelationAggregateInput, {nullable:true})
    production_data?: production_dataOrderByRelationAggregateInput;

    @Field(() => UsersOrderByRelevanceInput, {nullable:true})
    _relevance?: UsersOrderByRelevanceInput;
}
