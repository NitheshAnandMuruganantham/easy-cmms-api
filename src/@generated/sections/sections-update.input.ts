import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MachinesUpdateManyWithoutSectionNestedInput } from '../machines/machines-update-many-without-section-nested.input';
import { BlockUpdateOneRequiredWithoutSectionsNestedInput } from '../block/block-update-one-required-without-sections-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SectionsUpdateInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MachinesUpdateManyWithoutSectionNestedInput, {nullable:true})
    machines?: MachinesUpdateManyWithoutSectionNestedInput;

    @HideField()
    block?: BlockUpdateOneRequiredWithoutSectionsNestedInput;
}
