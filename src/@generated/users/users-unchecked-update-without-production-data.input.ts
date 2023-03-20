import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { UsersUpdateextra_rolesInput } from './users-updateextra-roles.input';
import { MaintenanceUncheckedUpdateManyWithoutAssigneeNestedInput } from '../maintenance/maintenance-unchecked-update-many-without-assignee-nested.input';
import { TicketUncheckedUpdateManyWithoutUserNestedInput } from '../ticket/ticket-unchecked-update-many-without-user-nested.input';
import { routine_maintanancesUncheckedUpdateManyWithoutAssigneeNestedInput } from '../routine-maintanances/routine-maintanances-unchecked-update-many-without-assignee-nested.input';

@InputType()
export class UsersUncheckedUpdateWithoutProduction_dataInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    profile?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    user_auth_id?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    blockId?: BigIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => UsersUpdateextra_rolesInput, {nullable:true})
    extra_roles?: UsersUpdateextra_rolesInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role_alias?: StringFieldUpdateOperationsInput;

    @Field(() => MaintenanceUncheckedUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    maintenance?: MaintenanceUncheckedUpdateManyWithoutAssigneeNestedInput;

    @Field(() => TicketUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => routine_maintanancesUncheckedUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    routine_maintanances?: routine_maintanancesUncheckedUpdateManyWithoutAssigneeNestedInput;
}
