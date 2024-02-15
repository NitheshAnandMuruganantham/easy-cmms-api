import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../../common-dto/prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../../common-dto/prisma/bool-field-update-operations.input';
import { ItemsUpdateOneRequiredWithoutReplacementsNestedInput } from '../../items/items/items-update-one-required-without-replacements-nested.input';
import { BlockUpdateOneRequiredWithoutReplacementsNestedInput } from '../../block/block/block-update-one-required-without-replacements-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReplacementsUpdateWithoutMaintenanceInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  approved?: BoolFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => ItemsUpdateOneRequiredWithoutReplacementsNestedInput, {
    nullable: true,
  })
  items?: ItemsUpdateOneRequiredWithoutReplacementsNestedInput;

  @HideField()
  block?: BlockUpdateOneRequiredWithoutReplacementsNestedInput;
}
