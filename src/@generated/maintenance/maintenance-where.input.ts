import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UsersRelationFilter } from '../users/users-relation-filter.input';
import { MachinesRelationFilter } from '../machines/machines-relation-filter.input';
import { ReplacementsListRelationFilter } from '../replacements/replacements-list-relation-filter.input';
import { ReportsListRelationFilter } from '../reports/reports-list-relation-filter.input';
import { TicketRelationFilter } from '../ticket/ticket-relation-filter.input';

@InputType()
export class MaintenanceWhereInput {

    @Field(() => [MaintenanceWhereInput], {nullable:true})
    AND?: Array<MaintenanceWhereInput>;

    @Field(() => [MaintenanceWhereInput], {nullable:true})
    OR?: Array<MaintenanceWhereInput>;

    @Field(() => [MaintenanceWhereInput], {nullable:true})
    NOT?: Array<MaintenanceWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    photo?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    from?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    to?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    resolved?: BoolFilter;

    @Field(() => JsonFilter, {nullable:true})
    metadata?: JsonFilter;

    @Field(() => BoolFilter, {nullable:true})
    un_planned?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    elapsed?: DateTimeNullableFilter;

    @Field(() => BigIntFilter, {nullable:true})
    assignee_id?: BigIntFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    assignee?: UsersRelationFilter;

    @Field(() => BigIntFilter, {nullable:true})
    machine_id?: BigIntFilter;

    @Field(() => MachinesRelationFilter, {nullable:true})
    machines?: MachinesRelationFilter;

    @Field(() => ReplacementsListRelationFilter, {nullable:true})
    replacements?: ReplacementsListRelationFilter;

    @Field(() => ReportsListRelationFilter, {nullable:true})
    reports?: ReportsListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => TicketRelationFilter, {nullable:true})
    ticket?: TicketRelationFilter;
}
