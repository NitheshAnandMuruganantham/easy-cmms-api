import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BlockRelationFilter } from '../block/block-relation-filter.input';
import { SectionsRelationFilter } from '../sections/sections-relation-filter.input';
import { MaintenanceListRelationFilter } from '../maintenance/maintenance-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TicketListRelationFilter } from '../ticket/ticket-list-relation-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { Machine_catagoryRelationFilter } from '../prisma/machine-catagory-relation-filter.input';
import { Routine_maintanancesListRelationFilter } from '../prisma/routine-maintanances-list-relation-filter.input';

@InputType()
export class MachinesWhereInput {

    @Field(() => [MachinesWhereInput], {nullable:true})
    AND?: Array<MachinesWhereInput>;

    @Field(() => [MachinesWhereInput], {nullable:true})
    OR?: Array<MachinesWhereInput>;

    @Field(() => [MachinesWhereInput], {nullable:true})
    NOT?: Array<MachinesWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BigIntFilter, {nullable:true})
    section_id?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    block_id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    label?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    profile?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    priority?: IntFilter;

    @Field(() => BlockRelationFilter, {nullable:true})
    block?: BlockRelationFilter;

    @Field(() => SectionsRelationFilter, {nullable:true})
    section?: SectionsRelationFilter;

    @Field(() => MaintenanceListRelationFilter, {nullable:true})
    maintenance?: MaintenanceListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => TicketListRelationFilter, {nullable:true})
    Ticket?: TicketListRelationFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    machine_catagory_id?: BigIntNullableFilter;

    @Field(() => Machine_catagoryRelationFilter, {nullable:true})
    machine_catagory?: Machine_catagoryRelationFilter;

    @Field(() => Routine_maintanancesListRelationFilter, {nullable:true})
    routine_maintanances?: Routine_maintanancesListRelationFilter;
}
