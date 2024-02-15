import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../common-dto/prisma/nullable-string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../../common-dto/prisma/enum-role-field-update-operations.input';
import { UsersUpdateextra_rolesInput } from './users-updateextra-roles.input';
import { MaintenanceUpdateManyWithoutAssigneeNestedInput } from '../../maintanance/maintenance/maintenance-update-many-without-assignee-nested.input';
import { TicketUpdateManyWithoutUserNestedInput } from '../../ticket/ticket/ticket-update-many-without-user-nested.input';
import { routine_maintanancesUpdateManyWithoutAssigneeNestedInput } from '../../routine-maintanances/routine-maintanances/routine-maintanances-update-many-without-assignee-nested.input';

@InputType()
export class UsersUpdateWithoutBlockInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  profile?: any;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phone?: StringFieldUpdateOperationsInput;

  @HideField()
  user_auth_id?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: EnumRoleFieldUpdateOperationsInput;

  @Field(() => UsersUpdateextra_rolesInput, { nullable: true })
  extra_roles?: UsersUpdateextra_rolesInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  role_alias?: StringFieldUpdateOperationsInput;

  @Field(() => MaintenanceUpdateManyWithoutAssigneeNestedInput, {
    nullable: true,
  })
  maintenance?: MaintenanceUpdateManyWithoutAssigneeNestedInput;

  @Field(() => TicketUpdateManyWithoutUserNestedInput, { nullable: true })
  ticket?: TicketUpdateManyWithoutUserNestedInput;

  @Field(() => routine_maintanancesUpdateManyWithoutAssigneeNestedInput, {
    nullable: true,
  })
  routine_maintanances?: routine_maintanancesUpdateManyWithoutAssigneeNestedInput;
}
