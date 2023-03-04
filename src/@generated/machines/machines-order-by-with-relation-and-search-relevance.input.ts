import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../block/block-order-by-with-relation-and-search-relevance.input';
import { SectionsOrderByWithRelationAndSearchRelevanceInput } from '../sections/sections-order-by-with-relation-and-search-relevance.input';
import { MaintenanceOrderByRelationAggregateInput } from '../maintenance/maintenance-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../ticket/ticket-order-by-relation-aggregate.input';
import { routine_maintanancesOrderByRelationAggregateInput } from '../routine-maintanances/routine-maintanances-order-by-relation-aggregate.input';
import { MachinesOrderByRelevanceInput } from './machines-order-by-relevance.input';

@InputType()
export class MachinesOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    section_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    block_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    label?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priority?: keyof typeof SortOrder;

    @Field(() => BlockOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    block?: BlockOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SectionsOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    section?: SectionsOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => MaintenanceOrderByRelationAggregateInput, {nullable:true})
    maintenance?: MaintenanceOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => TicketOrderByRelationAggregateInput, {nullable:true})
    Ticket?: TicketOrderByRelationAggregateInput;

    @Field(() => routine_maintanancesOrderByRelationAggregateInput, {nullable:true})
    routine_maintanances?: routine_maintanancesOrderByRelationAggregateInput;

    @Field(() => MachinesOrderByRelevanceInput, {nullable:true})
    _relevance?: MachinesOrderByRelevanceInput;
}
