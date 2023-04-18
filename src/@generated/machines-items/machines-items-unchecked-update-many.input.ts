import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machines_itemsUncheckedUpdateManyInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    machine_id?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    item_id?: BigIntFieldUpdateOperationsInput;

    @HideField()
    block_id?: BigIntFieldUpdateOperationsInput;
}
