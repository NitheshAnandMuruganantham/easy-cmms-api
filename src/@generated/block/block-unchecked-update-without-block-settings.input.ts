import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MachinesUncheckedUpdateManyWithoutBlockNestedInput } from '../machines/machines-unchecked-update-many-without-block-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UsersUncheckedUpdateManyWithoutBlockNestedInput } from '../users/users-unchecked-update-many-without-block-nested.input';

@InputType()
export class BlockUncheckedUpdateWithoutBlock_settingsInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    location?: StringFieldUpdateOperationsInput;

    @Field(() => MachinesUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    machines?: MachinesUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UsersUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Users?: UsersUncheckedUpdateManyWithoutBlockNestedInput;
}
