import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { Role } from '../prisma/role.enum';
import { UsersCreateextra_rolesInput } from './users-createextra-roles.input';
import { MaintenanceUncheckedCreateNestedManyWithoutAssigneeInput } from '../maintenance/maintenance-unchecked-create-nested-many-without-assignee.input';
import { TicketUncheckedCreateNestedManyWithoutUserInput } from '../ticket/ticket-unchecked-create-nested-many-without-user.input';
import { routine_maintanancesUncheckedCreateNestedManyWithoutAssigneeInput } from '../routine-maintanances/routine-maintanances-unchecked-create-nested-many-without-assignee.input';
import { production_dataUncheckedCreateNestedManyWithoutUpdatedByInput } from '../production-data/production-data-unchecked-create-nested-many-without-updated-by.input';

@InputType()
export class UsersUncheckedCreateInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => GraphQLJSON, {nullable:true})
    profile?: any;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    user_auth_id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLBigInt, {nullable:false})
    blockId!: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => UsersCreateextra_rolesInput, {nullable:true})
    extra_roles?: UsersCreateextra_rolesInput;

    @Field(() => String, {nullable:true})
    role_alias?: string;

    @Field(() => MaintenanceUncheckedCreateNestedManyWithoutAssigneeInput, {nullable:true})
    maintenance?: MaintenanceUncheckedCreateNestedManyWithoutAssigneeInput;

    @Field(() => TicketUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => routine_maintanancesUncheckedCreateNestedManyWithoutAssigneeInput, {nullable:true})
    routine_maintanances?: routine_maintanancesUncheckedCreateNestedManyWithoutAssigneeInput;

    @Field(() => production_dataUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    production_data?: production_dataUncheckedCreateNestedManyWithoutUpdatedByInput;
}
