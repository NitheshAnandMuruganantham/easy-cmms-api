import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { catagoryUpdateOneRequiredWithoutItemsNestedInput } from '../catagory/catagory-update-one-required-without-items-nested.input';
import { BlockUpdateOneRequiredWithoutItemsNestedInput } from '../block/block-update-one-required-without-items-nested.input';
import { HideField } from '@nestjs/graphql';
import { invoice_itemsUpdateManyWithoutItemNestedInput } from '../invoice-items/invoice-items-update-many-without-item-nested.input';

@InputType()
export class ItemsUpdateWithoutReplacementsInput {

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

    @Field(() => catagoryUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    catagory?: catagoryUpdateOneRequiredWithoutItemsNestedInput;

    @HideField()
    block?: BlockUpdateOneRequiredWithoutItemsNestedInput;

    @Field(() => invoice_itemsUpdateManyWithoutItemNestedInput, {nullable:true})
    invoice_items?: invoice_itemsUpdateManyWithoutItemNestedInput;
}
