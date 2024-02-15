import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../../common-dto/prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../../common-dto/prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { catagoryUpdateOneRequiredWithoutItemsNestedInput } from '../../common-dto/catagory/catagory-update-one-required-without-items-nested.input';
import { ReplacementsUpdateManyWithoutItemsNestedInput } from '../../replacements/replacements/replacements-update-many-without-items-nested.input';
import { BlockUpdateOneRequiredWithoutItemsNestedInput } from '../../block/block/block-update-one-required-without-items-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ItemsUpdateWithoutMachines_itemsInput {
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

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => catagoryUpdateOneRequiredWithoutItemsNestedInput, {
    nullable: true,
  })
  catagory?: catagoryUpdateOneRequiredWithoutItemsNestedInput;

  @Field(() => ReplacementsUpdateManyWithoutItemsNestedInput, {
    nullable: true,
  })
  replacements?: ReplacementsUpdateManyWithoutItemsNestedInput;

  @HideField()
  block?: BlockUpdateOneRequiredWithoutItemsNestedInput;
}
