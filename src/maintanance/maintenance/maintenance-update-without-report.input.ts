import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../../common-dto/prisma/bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { UsersUpdateOneRequiredWithoutMaintenanceNestedInput } from '../../users/users/users-update-one-required-without-maintenance-nested.input';
import { MachinesUpdateOneRequiredWithoutMaintenanceNestedInput } from '../../machines/machines/machines-update-one-required-without-maintenance-nested.input';
import { ReplacementsUpdateManyWithoutMaintenanceNestedInput } from '../../replacements/replacements/replacements-update-many-without-maintenance-nested.input';

@InputType()
export class MaintenanceUpdateWithoutReportInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

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

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  elapsed?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UsersUpdateOneRequiredWithoutMaintenanceNestedInput, {
    nullable: true,
  })
  assignee?: UsersUpdateOneRequiredWithoutMaintenanceNestedInput;

  @Field(() => MachinesUpdateOneRequiredWithoutMaintenanceNestedInput, {
    nullable: true,
  })
  machines?: MachinesUpdateOneRequiredWithoutMaintenanceNestedInput;

  @Field(() => ReplacementsUpdateManyWithoutMaintenanceNestedInput, {
    nullable: true,
  })
  replacements?: ReplacementsUpdateManyWithoutMaintenanceNestedInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;
}
