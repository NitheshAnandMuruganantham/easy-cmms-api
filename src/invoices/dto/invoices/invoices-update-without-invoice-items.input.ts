import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../../common-dto/prisma/big-int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../../../common-dto/prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../../common-dto/prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../../common-dto/prisma/string-field-update-operations.input';
import { BlockUpdateOneRequiredWithoutInvoicesNestedInput } from '../../../block/dto/block/block-update-one-required-without-invoices-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class InvoicesUpdateWithoutInvoice_itemsInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  total?: FloatFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  invoice_date?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  number?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  block?: BlockUpdateOneRequiredWithoutInvoicesNestedInput;
}
