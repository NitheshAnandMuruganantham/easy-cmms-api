import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../../common-dto/prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { IntFieldUpdateOperationsInput } from '../../../common-dto/prisma/int-field-update-operations.input';
import { BlockUpdateOneRequiredWithoutMachinesNestedInput } from '../../../block/dto/block/block-update-one-required-without-machines-nested.input';
import { MaintenanceUpdateManyWithoutMachinesNestedInput } from '../../../maintanance/dto/maintenance-update-many-without-machines-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../../../common-dto/prisma/date-time-field-update-operations.input';

@InputType()
export class MachinesUpdateWithoutSection_machines_sectionTosectionInput {
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

  @Field(() => BlockUpdateOneRequiredWithoutMachinesNestedInput, {
    nullable: true,
  })
  block?: BlockUpdateOneRequiredWithoutMachinesNestedInput;

  @Field(() => MaintenanceUpdateManyWithoutMachinesNestedInput, {
    nullable: true,
  })
  maintenance?: MaintenanceUpdateManyWithoutMachinesNestedInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;
}
