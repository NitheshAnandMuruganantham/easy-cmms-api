import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../../common-dto/prisma/big-int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../../../common-dto/prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../../common-dto/prisma/date-time-field-update-operations.input';
import { ItemsUpdateOneRequiredWithoutInvoice_itemsNestedInput } from '../../../items/items/items-update-one-required-without-invoice-items-nested.input';
import { BlockUpdateOneRequiredWithoutInvoice_itemsNestedInput } from '../../../block/dto/block/block-update-one-required-without-invoice-items-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class invoice_itemsUpdateWithoutInvoiceInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  unit_price?: FloatFieldUpdateOperationsInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  quantity?: FloatFieldUpdateOperationsInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  amount?: FloatFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => ItemsUpdateOneRequiredWithoutInvoice_itemsNestedInput, {
    nullable: true,
  })
  item?: ItemsUpdateOneRequiredWithoutInvoice_itemsNestedInput;

  @HideField()
  block?: BlockUpdateOneRequiredWithoutInvoice_itemsNestedInput;
}
