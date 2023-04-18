import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MachinesUncheckedUpdateManyWithoutMachine_catagoryNestedInput } from '../machines/machines-unchecked-update-many-without-machine-catagory-nested.input';

@InputType()
export class machine_catagoryUncheckedUpdateWithoutBlockInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MachinesUncheckedUpdateManyWithoutMachine_catagoryNestedInput, {nullable:true})
    machines?: MachinesUncheckedUpdateManyWithoutMachine_catagoryNestedInput;
}
