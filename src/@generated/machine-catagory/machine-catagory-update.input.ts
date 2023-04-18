import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MachinesUpdateManyWithoutMachine_catagoryNestedInput } from '../machines/machines-update-many-without-machine-catagory-nested.input';
import { BlockUpdateOneRequiredWithoutMachine_catagoryNestedInput } from '../block/block-update-one-required-without-machine-catagory-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machine_catagoryUpdateInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MachinesUpdateManyWithoutMachine_catagoryNestedInput, {nullable:true})
    machines?: MachinesUpdateManyWithoutMachine_catagoryNestedInput;

    @HideField()
    block?: BlockUpdateOneRequiredWithoutMachine_catagoryNestedInput;
}
