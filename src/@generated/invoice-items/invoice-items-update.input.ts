import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { InvoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput } from '../invoices/invoices-update-one-required-without-invoice-items-nested.input';
import { ItemsUpdateOneRequiredWithoutInvoice_itemsNestedInput } from '../items/items-update-one-required-without-invoice-items-nested.input';
import { BlockUpdateOneRequiredWithoutInvoice_itemsNestedInput } from '../block/block-update-one-required-without-invoice-items-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class invoice_itemsUpdateInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    unit_price?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    quantity?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => InvoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput, {nullable:true})
    invoice?: InvoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput;

    @Field(() => ItemsUpdateOneRequiredWithoutInvoice_itemsNestedInput, {nullable:true})
    item?: ItemsUpdateOneRequiredWithoutInvoice_itemsNestedInput;

    @HideField()
    block?: BlockUpdateOneRequiredWithoutInvoice_itemsNestedInput;
}