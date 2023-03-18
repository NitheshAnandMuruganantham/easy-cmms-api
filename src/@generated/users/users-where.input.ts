import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BlockRelationFilter } from '../block/block-relation-filter.input';
import { MaintenanceListRelationFilter } from '../maintenance/maintenance-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input';
import { TicketListRelationFilter } from '../ticket/ticket-list-relation-filter.input';
import { Routine_maintanancesListRelationFilter } from '../prisma/routine-maintanances-list-relation-filter.input';
import { Production_dataListRelationFilter } from '../prisma/production-data-list-relation-filter.input';

@InputType()
export class UsersWhereInput {

    @Field(() => [UsersWhereInput], {nullable:true})
    AND?: Array<UsersWhereInput>;

    @Field(() => [UsersWhereInput], {nullable:true})
    OR?: Array<UsersWhereInput>;

    @Field(() => [UsersWhereInput], {nullable:true})
    NOT?: Array<UsersWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => JsonFilter, {nullable:true})
    profile?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    user_auth_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BigIntFilter, {nullable:true})
    blockId?: BigIntFilter;

    @Field(() => BlockRelationFilter, {nullable:true})
    block?: BlockRelationFilter;

    @Field(() => MaintenanceListRelationFilter, {nullable:true})
    maintenance?: MaintenanceListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => EnumRoleNullableListFilter, {nullable:true})
    extra_roles?: EnumRoleNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    role_alias?: StringFilter;

    @Field(() => TicketListRelationFilter, {nullable:true})
    ticket?: TicketListRelationFilter;

    @Field(() => Routine_maintanancesListRelationFilter, {nullable:true})
    routine_maintanances?: Routine_maintanancesListRelationFilter;

    @Field(() => Production_dataListRelationFilter, {nullable:true})
    production_data?: Production_dataListRelationFilter;
}
