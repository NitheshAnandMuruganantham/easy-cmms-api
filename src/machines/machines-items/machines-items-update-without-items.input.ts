import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { MachinesUpdateOneRequiredWithoutMachines_itemsNestedInput } from '../machines/machines-update-one-required-without-machines-items-nested.input';
import { BlockUpdateOneRequiredWithoutMachines_itemsNestedInput } from '../../block/block/block-update-one-required-without-machines-items-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machines_itemsUpdateWithoutItemsInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => MachinesUpdateOneRequiredWithoutMachines_itemsNestedInput, {
    nullable: true,
  })
  machine?: MachinesUpdateOneRequiredWithoutMachines_itemsNestedInput;

  @HideField()
  block?: BlockUpdateOneRequiredWithoutMachines_itemsNestedInput;
}
