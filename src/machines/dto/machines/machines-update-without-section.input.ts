import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../../common-dto/prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { IntFieldUpdateOperationsInput } from '../../../common-dto/prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../../common-dto/prisma/date-time-field-update-operations.input';
import { BlockUpdateOneRequiredWithoutMachinesNestedInput } from '../../../block/dto/block/block-update-one-required-without-machines-nested.input';
import { HideField } from '@nestjs/graphql';
import { MaintenanceUpdateManyWithoutMachinesNestedInput } from '../../../maintanance/dto/maintenance-update-many-without-machines-nested.input';
import { TicketUpdateManyWithoutMachinesNestedInput } from '../../../ticket/dto/ticket-update-many-without-machines-nested.input';
import { machine_catagoryUpdateOneRequiredWithoutMachinesNestedInput } from '../../../machine_catagory/dto/machine-catagory-update-one-required-without-machines-nested.input';
import { routine_maintanancesUpdateManyWithoutMeachineNestedInput } from '../../../routine-maintanances/dto/routine-maintanances-update-many-without-meachine-nested.input';

@InputType()
export class MachinesUpdateWithoutSectionInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  label?: StringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  profile?: any;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  priority?: IntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  block?: BlockUpdateOneRequiredWithoutMachinesNestedInput;

  @Field(() => MaintenanceUpdateManyWithoutMachinesNestedInput, {
    nullable: true,
  })
  maintenance?: MaintenanceUpdateManyWithoutMachinesNestedInput;

  @Field(() => TicketUpdateManyWithoutMachinesNestedInput, { nullable: true })
  Ticket?: TicketUpdateManyWithoutMachinesNestedInput;

  @Field(() => machine_catagoryUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true,
  })
  machine_catagory?: machine_catagoryUpdateOneRequiredWithoutMachinesNestedInput;

  @Field(() => routine_maintanancesUpdateManyWithoutMeachineNestedInput, {
    nullable: true,
  })
  routine_maintanances?: routine_maintanancesUpdateManyWithoutMeachineNestedInput;
}
