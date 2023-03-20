import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BlockUpdateMailingsInput } from './block-update-mailings.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UsersUpdateManyWithoutBlockNestedInput } from '../users/users-update-many-without-block-nested.input';
import { block_settingsUpdateManyWithoutBlockNestedInput } from '../block-settings/block-settings-update-many-without-block-nested.input';
import { production_dataUpdateManyWithoutBlockNestedInput } from '../production-data/production-data-update-many-without-block-nested.input';

@InputType()
export class BlockUpdateWithoutMachinesInput {

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

    @Field(() => UsersUpdateManyWithoutBlockNestedInput, {nullable:true})
    Users?: UsersUpdateManyWithoutBlockNestedInput;

    @Field(() => block_settingsUpdateManyWithoutBlockNestedInput, {nullable:true})
    block_settings?: block_settingsUpdateManyWithoutBlockNestedInput;

    @Field(() => production_dataUpdateManyWithoutBlockNestedInput, {nullable:true})
    production_data?: production_dataUpdateManyWithoutBlockNestedInput;
}
