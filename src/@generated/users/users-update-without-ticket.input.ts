import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BlockUpdateOneRequiredWithoutUsersNestedInput } from '../block/block-update-one-required-without-users-nested.input';
import { MaintenanceUpdateManyWithoutAssigneeNestedInput } from '../maintenance/maintenance-update-many-without-assignee-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { UsersUpdateextra_rolesInput } from './users-updateextra-roles.input';
import { routine_maintanancesUpdateManyWithoutAssigneeNestedInput } from '../routine-maintanances/routine-maintanances-update-many-without-assignee-nested.input';
import { production_dataUpdateManyWithoutUpdatedByNestedInput } from '../production-data/production-data-update-many-without-updated-by-nested.input';

@InputType()
export class UsersUpdateWithoutTicketInput {

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

    @Field(() => BlockUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    block?: BlockUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => MaintenanceUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    maintenance?: MaintenanceUpdateManyWithoutAssigneeNestedInput;

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

    @Field(() => routine_maintanancesUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    routine_maintanances?: routine_maintanancesUpdateManyWithoutAssigneeNestedInput;

    @Field(() => production_dataUpdateManyWithoutUpdatedByNestedInput, {nullable:true})
    production_data?: production_dataUpdateManyWithoutUpdatedByNestedInput;
}
