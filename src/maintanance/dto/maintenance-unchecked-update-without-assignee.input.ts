import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../common-dto/prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../../common-dto/prisma/bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/nullable-date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ReplacementsUncheckedUpdateManyWithoutMaintenanceNestedInput } from '../../replacements/dto/replacements-unchecked-update-many-without-maintenance-nested.input';
import { ReportsUncheckedUpdateManyWithoutMaintenanceNestedInput } from '../../report/dto/reports-unchecked-update-many-without-maintenance-nested.input';
import { TicketUncheckedUpdateOneWithoutMaintenanceNestedInput } from '../../ticket/dto/ticket-unchecked-update-one-without-maintenance-nested.input';

@InputType()
export class MaintenanceUncheckedUpdateWithoutAssigneeInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  photo?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  from?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  to?: DateTimeFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  resolved?: BoolFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  un_planned?: BoolFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  elapsed?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  machine_id?: BigIntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  block_id?: BigIntFieldUpdateOperationsInput;

  @Field(() => ReplacementsUncheckedUpdateManyWithoutMaintenanceNestedInput, {
    nullable: true,
  })
  replacements?: ReplacementsUncheckedUpdateManyWithoutMaintenanceNestedInput;

  @Field(() => ReportsUncheckedUpdateManyWithoutMaintenanceNestedInput, {
    nullable: true,
  })
  reports?: ReportsUncheckedUpdateManyWithoutMaintenanceNestedInput;

  @Field(() => TicketUncheckedUpdateOneWithoutMaintenanceNestedInput, {
    nullable: true,
  })
  ticket?: TicketUncheckedUpdateOneWithoutMaintenanceNestedInput;
}
