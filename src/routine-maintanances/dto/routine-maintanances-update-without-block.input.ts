import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../../common-dto/prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutRoutine_maintanancesNestedInput } from '../../users/dto/users-update-one-required-without-routine-maintanances-nested.input';
import { MachinesUpdateOneRequiredWithoutRoutine_maintanancesNestedInput } from '../../machines/dto/machines/machines-update-one-required-without-routine-maintanances-nested.input';

@InputType()
export class routine_maintanancesUpdateWithoutBlockInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  cron?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  duration?: IntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UsersUpdateOneRequiredWithoutRoutine_maintanancesNestedInput, {
    nullable: true,
  })
  assignee?: UsersUpdateOneRequiredWithoutRoutine_maintanancesNestedInput;

  @Field(
    () => MachinesUpdateOneRequiredWithoutRoutine_maintanancesNestedInput,
    { nullable: true },
  )
  meachine?: MachinesUpdateOneRequiredWithoutRoutine_maintanancesNestedInput;
}
