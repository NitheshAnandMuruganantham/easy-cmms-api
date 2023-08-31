import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MachinesOrderByRelationAggregateInput } from '../machines/machines-order-by-relation-aggregate.input';
import { UsersOrderByRelationAggregateInput } from '../users/users-order-by-relation-aggregate.input';
import { block_settingsOrderByRelationAggregateInput } from '../block-settings/block-settings-order-by-relation-aggregate.input';
import { catagoryOrderByRelationAggregateInput } from '../catagory/catagory-order-by-relation-aggregate.input';
import { ItemsOrderByRelationAggregateInput } from '../items/items-order-by-relation-aggregate.input';
import { machine_catagoryOrderByRelationAggregateInput } from '../machine-catagory/machine-catagory-order-by-relation-aggregate.input';
import { MaintenanceOrderByRelationAggregateInput } from '../maintenance/maintenance-order-by-relation-aggregate.input';
import { ReplacementsOrderByRelationAggregateInput } from '../replacements/replacements-order-by-relation-aggregate.input';
import { ReportsOrderByRelationAggregateInput } from '../reports/reports-order-by-relation-aggregate.input';
import { SectionsOrderByRelationAggregateInput } from '../sections/sections-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../ticket/ticket-order-by-relation-aggregate.input';
import { routine_maintanancesOrderByRelationAggregateInput } from '../routine-maintanances/routine-maintanances-order-by-relation-aggregate.input';
import { InvoicesOrderByRelationAggregateInput } from '../invoices/invoices-order-by-relation-aggregate.input';
import { invoice_itemsOrderByRelationAggregateInput } from '../invoice-items/invoice-items-order-by-relation-aggregate.input';
import { BlockOrderByRelevanceInput } from './block-order-by-relevance.input';

@InputType()
export class BlockOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    Mailings?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => MachinesOrderByRelationAggregateInput, {nullable:true})
    machines?: MachinesOrderByRelationAggregateInput;

    @Field(() => UsersOrderByRelationAggregateInput, {nullable:true})
    Users?: UsersOrderByRelationAggregateInput;

    @Field(() => block_settingsOrderByRelationAggregateInput, {nullable:true})
    block_settings?: block_settingsOrderByRelationAggregateInput;

    @Field(() => catagoryOrderByRelationAggregateInput, {nullable:true})
    catagory?: catagoryOrderByRelationAggregateInput;

    @Field(() => ItemsOrderByRelationAggregateInput, {nullable:true})
    Items?: ItemsOrderByRelationAggregateInput;

    @Field(() => machine_catagoryOrderByRelationAggregateInput, {nullable:true})
    machine_catagory?: machine_catagoryOrderByRelationAggregateInput;

    @Field(() => MaintenanceOrderByRelationAggregateInput, {nullable:true})
    Maintenance?: MaintenanceOrderByRelationAggregateInput;

    @Field(() => ReplacementsOrderByRelationAggregateInput, {nullable:true})
    Replacements?: ReplacementsOrderByRelationAggregateInput;

    @Field(() => ReportsOrderByRelationAggregateInput, {nullable:true})
    Reports?: ReportsOrderByRelationAggregateInput;

    @Field(() => SectionsOrderByRelationAggregateInput, {nullable:true})
    Sections?: SectionsOrderByRelationAggregateInput;

    @Field(() => TicketOrderByRelationAggregateInput, {nullable:true})
    Ticket?: TicketOrderByRelationAggregateInput;

    @Field(() => routine_maintanancesOrderByRelationAggregateInput, {nullable:true})
    routine_maintanances?: routine_maintanancesOrderByRelationAggregateInput;

    @Field(() => InvoicesOrderByRelationAggregateInput, {nullable:true})
    Invoices?: InvoicesOrderByRelationAggregateInput;

    @Field(() => invoice_itemsOrderByRelationAggregateInput, {nullable:true})
    invoice_items?: invoice_itemsOrderByRelationAggregateInput;

    @Field(() => BlockOrderByRelevanceInput, {nullable:true})
    _relevance?: BlockOrderByRelevanceInput;
}
