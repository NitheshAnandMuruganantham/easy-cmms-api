import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ReplacementsUncheckedUpdateManyWithoutItemsNestedInput } from '../replacements/replacements-unchecked-update-many-without-items-nested.input';
import { machines_itemsUncheckedUpdateManyWithoutItemsNestedInput } from '../machines-items/machines-items-unchecked-update-many-without-items-nested.input';

@InputType()
export class ItemsUncheckedUpdateWithoutCatagoryInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: IntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    unit_price?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    block_id?: BigIntFieldUpdateOperationsInput;

    @Field(() => ReplacementsUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    replacements?: ReplacementsUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => machines_itemsUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    machines_items?: machines_itemsUncheckedUpdateManyWithoutItemsNestedInput;
}
