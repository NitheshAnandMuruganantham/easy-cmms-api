import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BlockUpdateMailingsInput } from './block-update-mailings.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MachinesUncheckedUpdateManyWithoutBlockNestedInput } from '../machines/machines-unchecked-update-many-without-block-nested.input';
import { block_settingsUncheckedUpdateManyWithoutBlockNestedInput } from '../block-settings/block-settings-unchecked-update-many-without-block-nested.input';
import { production_dataUncheckedUpdateManyWithoutBlockNestedInput } from '../production-data/production-data-unchecked-update-many-without-block-nested.input';

@InputType()
export class BlockUncheckedUpdateWithoutUsersInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    location?: StringFieldUpdateOperationsInput;

    @Field(() => BlockUpdateMailingsInput, {nullable:true})
    Mailings?: BlockUpdateMailingsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MachinesUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    machines?: MachinesUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => block_settingsUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    block_settings?: block_settingsUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => production_dataUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    production_data?: production_dataUncheckedUpdateManyWithoutBlockNestedInput;
}
