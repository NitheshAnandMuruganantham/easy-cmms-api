import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MachinesUpdateManyWithoutBlockNestedInput } from '../machines/machines-update-many-without-block-nested.input';
import { BlockUpdateMailingsInput } from './block-update-mailings.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UsersUpdateManyWithoutBlockNestedInput } from '../users/users-update-many-without-block-nested.input';
import { block_settingsUpdateManyWithoutBlockNestedInput } from '../block-settings/block-settings-update-many-without-block-nested.input';

@InputType()
export class BlockUpdateWithoutProduction_dataInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    location?: StringFieldUpdateOperationsInput;

    @Field(() => MachinesUpdateManyWithoutBlockNestedInput, {nullable:true})
    machines?: MachinesUpdateManyWithoutBlockNestedInput;

    @Field(() => BlockUpdateMailingsInput, {nullable:true})
    Mailings?: BlockUpdateMailingsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UsersUpdateManyWithoutBlockNestedInput, {nullable:true})
    Users?: UsersUpdateManyWithoutBlockNestedInput;

    @Field(() => block_settingsUpdateManyWithoutBlockNestedInput, {nullable:true})
    block_settings?: block_settingsUpdateManyWithoutBlockNestedInput;
}
