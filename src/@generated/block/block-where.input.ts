import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MachinesListRelationFilter } from '../machines/machines-list-relation-filter.input';
import { UsersListRelationFilter } from '../users/users-list-relation-filter.input';
import { Block_settingsListRelationFilter } from '../prisma/block-settings-list-relation-filter.input';
import { Production_dataListRelationFilter } from '../prisma/production-data-list-relation-filter.input';
import { CatagoryListRelationFilter } from '../prisma/catagory-list-relation-filter.input';
import { ItemsListRelationFilter } from '../items/items-list-relation-filter.input';
import { Machine_catagoryListRelationFilter } from '../prisma/machine-catagory-list-relation-filter.input';
import { MaintenanceListRelationFilter } from '../maintenance/maintenance-list-relation-filter.input';
import { ReplacementsListRelationFilter } from '../replacements/replacements-list-relation-filter.input';
import { ReportsListRelationFilter } from '../reports/reports-list-relation-filter.input';
import { SectionsListRelationFilter } from '../sections/sections-list-relation-filter.input';
import { TicketListRelationFilter } from '../ticket/ticket-list-relation-filter.input';
import { Routine_maintanancesListRelationFilter } from '../prisma/routine-maintanances-list-relation-filter.input';
import { Machines_itemsListRelationFilter } from '../prisma/machines-items-list-relation-filter.input';

@InputType()
export class BlockWhereInput {

    @Field(() => [BlockWhereInput], {nullable:true})
    AND?: Array<BlockWhereInput>;

    @Field(() => [BlockWhereInput], {nullable:true})
    OR?: Array<BlockWhereInput>;

    @Field(() => [BlockWhereInput], {nullable:true})
    NOT?: Array<BlockWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    Mailings?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: MachinesListRelationFilter;

    @Field(() => UsersListRelationFilter, {nullable:true})
    Users?: UsersListRelationFilter;

    @Field(() => Block_settingsListRelationFilter, {nullable:true})
    block_settings?: Block_settingsListRelationFilter;

    @Field(() => Production_dataListRelationFilter, {nullable:true})
    production_data?: Production_dataListRelationFilter;

    @Field(() => CatagoryListRelationFilter, {nullable:true})
    catagory?: CatagoryListRelationFilter;

    @Field(() => ItemsListRelationFilter, {nullable:true})
    Items?: ItemsListRelationFilter;

    @Field(() => Machine_catagoryListRelationFilter, {nullable:true})
    machine_catagory?: Machine_catagoryListRelationFilter;

    @Field(() => MaintenanceListRelationFilter, {nullable:true})
    Maintenance?: MaintenanceListRelationFilter;

    @Field(() => ReplacementsListRelationFilter, {nullable:true})
    Replacements?: ReplacementsListRelationFilter;

    @Field(() => ReportsListRelationFilter, {nullable:true})
    Reports?: ReportsListRelationFilter;

    @Field(() => SectionsListRelationFilter, {nullable:true})
    Sections?: SectionsListRelationFilter;

    @Field(() => TicketListRelationFilter, {nullable:true})
    Ticket?: TicketListRelationFilter;

    @Field(() => Routine_maintanancesListRelationFilter, {nullable:true})
    routine_maintanances?: Routine_maintanancesListRelationFilter;

    @Field(() => Machines_itemsListRelationFilter, {nullable:true})
    machines_items?: Machines_itemsListRelationFilter;
}
