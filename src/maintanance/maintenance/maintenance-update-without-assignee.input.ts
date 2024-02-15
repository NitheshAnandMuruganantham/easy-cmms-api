import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../common-dto/prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../../common-dto/prisma/bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/nullable-date-time-field-update-operations.input';
import { MachinesUpdateOneRequiredWithoutMaintenanceNestedInput } from '../../machines/machines/machines-update-one-required-without-maintenance-nested.input';
import { ReplacementsUpdateManyWithoutMaintenanceNestedInput } from '../../replacements/replacements/replacements-update-many-without-maintenance-nested.input';
import { ReportsUpdateManyWithoutMaintenanceNestedInput } from '../../report/reports/reports-update-many-without-maintenance-nested.input';
import { TicketUpdateOneWithoutMaintenanceNestedInput } from '../../ticket/ticket/ticket-update-one-without-maintenance-nested.input';
import { BlockUpdateOneRequiredWithoutMaintenanceNestedInput } from '../../block/block/block-update-one-required-without-maintenance-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MaintenanceUpdateWithoutAssigneeInput {
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

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => MachinesUpdateOneRequiredWithoutMaintenanceNestedInput, {
    nullable: true,
  })
  machines?: MachinesUpdateOneRequiredWithoutMaintenanceNestedInput;

  @Field(() => ReplacementsUpdateManyWithoutMaintenanceNestedInput, {
    nullable: true,
  })
  replacements?: ReplacementsUpdateManyWithoutMaintenanceNestedInput;

  @Field(() => ReportsUpdateManyWithoutMaintenanceNestedInput, {
    nullable: true,
  })
  reports?: ReportsUpdateManyWithoutMaintenanceNestedInput;

  @Field(() => TicketUpdateOneWithoutMaintenanceNestedInput, { nullable: true })
  ticket?: TicketUpdateOneWithoutMaintenanceNestedInput;

  @HideField()
  block?: BlockUpdateOneRequiredWithoutMaintenanceNestedInput;
}
