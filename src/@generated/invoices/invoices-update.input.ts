import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BlockUpdateOneRequiredWithoutInvoicesNestedInput } from '../block/block-update-one-required-without-invoices-nested.input';
import { HideField } from '@nestjs/graphql';
import { invoice_itemsUpdateManyWithoutInvoiceNestedInput } from '../invoice-items/invoice-items-update-many-without-invoice-nested.input';

@InputType()
export class InvoicesUpdateInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    total?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    invoice_date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    number?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    block?: BlockUpdateOneRequiredWithoutInvoicesNestedInput;

    @Field(() => invoice_itemsUpdateManyWithoutInvoiceNestedInput, {nullable:true})
    invoice_items?: invoice_itemsUpdateManyWithoutInvoiceNestedInput;
}
