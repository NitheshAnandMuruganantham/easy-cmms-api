import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../../common-dto/prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ReplacementsUncheckedUpdateManyWithoutItemsNestedInput } from '../../replacements/replacements/replacements-unchecked-update-many-without-items-nested.input';
import { invoice_itemsUncheckedUpdateManyWithoutItemNestedInput } from '../../invoices/invoice-items/invoice-items-unchecked-update-many-without-item-nested.input';

@InputType()
export class ItemsUncheckedUpdateWithoutCatagoryInput {
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

  @HideField()
  block_id?: BigIntFieldUpdateOperationsInput;

  @Field(() => ReplacementsUncheckedUpdateManyWithoutItemsNestedInput, {
    nullable: true,
  })
  replacements?: ReplacementsUncheckedUpdateManyWithoutItemsNestedInput;

  @Field(() => invoice_itemsUncheckedUpdateManyWithoutItemNestedInput, {
    nullable: true,
  })
  invoice_items?: invoice_itemsUncheckedUpdateManyWithoutItemNestedInput;
}
