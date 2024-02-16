import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { MachinesCreateNestedOneWithoutMachines_itemsInput } from '../machines/machines-create-nested-one-without-machines-items.input';
import { ItemsCreateNestedOneWithoutMachines_itemsInput } from '../../../items/items/items-create-nested-one-without-machines-items.input';
import { BlockCreateNestedOneWithoutMachines_itemsInput } from '../../../block/dto/block/block-create-nested-one-without-machines-items.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machines_itemsCreateInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => MachinesCreateNestedOneWithoutMachines_itemsInput, {
    nullable: false,
  })
  machine!: MachinesCreateNestedOneWithoutMachines_itemsInput;

  @Field(() => ItemsCreateNestedOneWithoutMachines_itemsInput, {
    nullable: false,
  })
  items!: ItemsCreateNestedOneWithoutMachines_itemsInput;

  @HideField()
  block!: BlockCreateNestedOneWithoutMachines_itemsInput;
}
