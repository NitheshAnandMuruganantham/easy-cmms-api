import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { MaintenanceUncheckedCreateNestedManyWithoutAssigneeInput } from '../maintenance/maintenance-unchecked-create-nested-many-without-assignee.input';
import { Role } from '../prisma/role.enum';
import { TicketUncheckedCreateNestedManyWithoutUserInput } from '../ticket/ticket-unchecked-create-nested-many-without-user.input';
import { routine_maintanancesUncheckedCreateNestedManyWithoutAssigneeInput } from '../routine-maintanances/routine-maintanances-unchecked-create-nested-many-without-assignee.input';

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

    @Field(() => MaintenanceUncheckedCreateNestedManyWithoutAssigneeInput, {nullable:true})
    maintenance?: MaintenanceUncheckedCreateNestedManyWithoutAssigneeInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => TicketUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => routine_maintanancesUncheckedCreateNestedManyWithoutAssigneeInput, {nullable:true})
    routine_maintanances?: routine_maintanancesUncheckedCreateNestedManyWithoutAssigneeInput;
}
