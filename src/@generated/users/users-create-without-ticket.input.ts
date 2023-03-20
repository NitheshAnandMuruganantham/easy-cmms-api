import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { BlockCreateNestedOneWithoutUsersInput } from '../block/block-create-nested-one-without-users.input';
import { MaintenanceCreateNestedManyWithoutAssigneeInput } from '../maintenance/maintenance-create-nested-many-without-assignee.input';
import { Role } from '../prisma/role.enum';
import { UsersCreateextra_rolesInput } from './users-createextra-roles.input';
import { routine_maintanancesCreateNestedManyWithoutAssigneeInput } from '../routine-maintanances/routine-maintanances-create-nested-many-without-assignee.input';
import { production_dataCreateNestedManyWithoutUpdatedByInput } from '../production-data/production-data-create-nested-many-without-updated-by.input';

@InputType()
export class UsersCreateWithoutTicketInput {

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

    @Field(() => BlockCreateNestedOneWithoutUsersInput, {nullable:false})
    block!: BlockCreateNestedOneWithoutUsersInput;

    @Field(() => MaintenanceCreateNestedManyWithoutAssigneeInput, {nullable:true})
    maintenance?: MaintenanceCreateNestedManyWithoutAssigneeInput;

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

    @Field(() => routine_maintanancesCreateNestedManyWithoutAssigneeInput, {nullable:true})
    routine_maintanances?: routine_maintanancesCreateNestedManyWithoutAssigneeInput;

    @Field(() => production_dataCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    production_data?: production_dataCreateNestedManyWithoutUpdatedByInput;
}
