import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { MaintenanceCreateNestedManyWithoutAssigneeInput } from '../maintenance/maintenance-create-nested-many-without-assignee.input';
import { Role } from '../prisma/role.enum';
import { TicketCreateNestedManyWithoutUserInput } from '../ticket/ticket-create-nested-many-without-user.input';
import { routine_maintanancesCreateNestedManyWithoutAssigneeInput } from '../routine-maintanances/routine-maintanances-create-nested-many-without-assignee.input';

@InputType()
export class UsersCreateInput {

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

    @Field(() => MaintenanceCreateNestedManyWithoutAssigneeInput, {nullable:true})
    maintenance?: MaintenanceCreateNestedManyWithoutAssigneeInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => TicketCreateNestedManyWithoutUserInput, {nullable:true})
    ticket?: TicketCreateNestedManyWithoutUserInput;

    @Field(() => routine_maintanancesCreateNestedManyWithoutAssigneeInput, {nullable:true})
    routine_maintanances?: routine_maintanancesCreateNestedManyWithoutAssigneeInput;
}
