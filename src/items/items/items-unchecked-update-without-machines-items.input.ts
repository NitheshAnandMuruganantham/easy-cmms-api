import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../../common-dto/prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../../common-dto/prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ReplacementsUncheckedUpdateManyWithoutItemsNestedInput } from '../../replacements/replacements/replacements-unchecked-update-many-without-items-nested.input';

@InputType()
export class ItemsUncheckedUpdateWithoutMachines_itemsInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  unit_price?: FloatFieldUpdateOperationsInput;

  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  catagory_id?: BigIntFieldUpdateOperationsInput;

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
}
