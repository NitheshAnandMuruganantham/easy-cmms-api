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
import { TicketUncheckedUpdateManyWithoutUserNestedInput } from '../../ticket/dto/ticket-unchecked-update-many-without-user-nested.input';
import { routine_maintanancesUncheckedUpdateManyWithoutAssigneeNestedInput } from '../../routine-maintanances/dto/routine-maintanances-unchecked-update-many-without-assignee-nested.input';

@InputType()
export class UsersUncheckedUpdateWithoutMaintenanceInput {
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

  @HideField()
  blockId?: BigIntFieldUpdateOperationsInput;

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

  @Field(() => TicketUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput;

  @Field(
    () => routine_maintanancesUncheckedUpdateManyWithoutAssigneeNestedInput,
    { nullable: true },
  )
  routine_maintanances?: routine_maintanancesUncheckedUpdateManyWithoutAssigneeNestedInput;
}
