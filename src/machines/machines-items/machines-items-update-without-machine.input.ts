import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { ItemsUpdateOneRequiredWithoutMachines_itemsNestedInput } from '../../items/items/items-update-one-required-without-machines-items-nested.input';
import { BlockUpdateOneRequiredWithoutMachines_itemsNestedInput } from '../../block/block/block-update-one-required-without-machines-items-nested.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machines_itemsUpdateWithoutMachineInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => ItemsUpdateOneRequiredWithoutMachines_itemsNestedInput, {
    nullable: true,
  })
  items?: ItemsUpdateOneRequiredWithoutMachines_itemsNestedInput;

  @HideField()
  block?: BlockUpdateOneRequiredWithoutMachines_itemsNestedInput;
}
