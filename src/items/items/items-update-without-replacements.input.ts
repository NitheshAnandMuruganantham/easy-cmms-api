import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../../common-dto/prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { catagoryUpdateOneRequiredWithoutItemsNestedInput } from '../catagory/catagory-update-one-required-without-items-nested.input';
import { BlockUpdateOneRequiredWithoutItemsNestedInput } from '../../block/dto/block/block-update-one-required-without-items-nested.input';
import { HideField } from '@nestjs/graphql';
import { invoice_itemsUpdateManyWithoutItemNestedInput } from '../../invoices/dto/invoice-items/invoice-items-update-many-without-item-nested.input';

@InputType()
export class ItemsUpdateWithoutReplacementsInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  quantity?: FloatFieldUpdateOperationsInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  unit_price?: FloatFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => catagoryUpdateOneRequiredWithoutItemsNestedInput, {
    nullable: true,
  })
  catagory?: catagoryUpdateOneRequiredWithoutItemsNestedInput;

  @HideField()
  block?: BlockUpdateOneRequiredWithoutItemsNestedInput;

  @Field(() => invoice_itemsUpdateManyWithoutItemNestedInput, {
    nullable: true,
  })
  invoice_items?: invoice_itemsUpdateManyWithoutItemNestedInput;
}
