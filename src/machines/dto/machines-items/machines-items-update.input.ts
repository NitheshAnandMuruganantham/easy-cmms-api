import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../../common-dto/prisma/big-int-field-update-operations.input';
import { MachinesUpdateOneRequiredWithoutMachines_itemsNestedInput } from '../machines/machines-update-one-required-without-machines-items-nested.input';
import { ItemsUpdateOneRequiredWithoutMachines_itemsNestedInput } from '../../../items/items/items-update-one-required-without-machines-items-nested.input';
import { BlockUpdateOneRequiredWithoutMachines_itemsNestedInput } from '../../../block/dto/block/block-update-one-required-without-machines-items-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machines_itemsUpdateInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => MachinesUpdateOneRequiredWithoutMachines_itemsNestedInput, {
    nullable: true,
  })
  machine?: MachinesUpdateOneRequiredWithoutMachines_itemsNestedInput;

  @Field(() => ItemsUpdateOneRequiredWithoutMachines_itemsNestedInput, {
    nullable: true,
  })
  items?: ItemsUpdateOneRequiredWithoutMachines_itemsNestedInput;

  @HideField()
  block?: BlockUpdateOneRequiredWithoutMachines_itemsNestedInput;
}
