import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../../common-dto/prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutRoutine_maintanancesNestedInput } from '../../users/dto/users-update-one-required-without-routine-maintanances-nested.input';
import { BlockUpdateOneRequiredWithoutRoutine_maintanancesNestedInput } from '../../block/dto/block/block-update-one-required-without-routine-maintanances-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class routine_maintanancesUpdateWithoutMeachineInput {
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

  @HideField()
  block?: BlockUpdateOneRequiredWithoutRoutine_maintanancesNestedInput;
}
