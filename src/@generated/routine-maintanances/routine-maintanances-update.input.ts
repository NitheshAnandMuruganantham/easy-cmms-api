import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutRoutine_maintanancesNestedInput } from '../users/users-update-one-required-without-routine-maintanances-nested.input';
import { MachinesUpdateOneRequiredWithoutRoutine_maintanancesNestedInput } from '../machines/machines-update-one-required-without-routine-maintanances-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class routine_maintanancesUpdateInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cron?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    duration?: IntFieldUpdateOperationsInput;

    @Field(() => UsersUpdateOneRequiredWithoutRoutine_maintanancesNestedInput, {nullable:true})
    assignee?: UsersUpdateOneRequiredWithoutRoutine_maintanancesNestedInput;

    @Field(() => MachinesUpdateOneRequiredWithoutRoutine_maintanancesNestedInput, {nullable:true})
    meachine?: MachinesUpdateOneRequiredWithoutRoutine_maintanancesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
