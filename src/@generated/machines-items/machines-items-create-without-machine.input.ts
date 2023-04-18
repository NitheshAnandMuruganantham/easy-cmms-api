import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { ItemsCreateNestedOneWithoutMachines_itemsInput } from '../items/items-create-nested-one-without-machines-items.input';
import { BlockCreateNestedOneWithoutMachines_itemsInput } from '../block/block-create-nested-one-without-machines-items.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machines_itemsCreateWithoutMachineInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => ItemsCreateNestedOneWithoutMachines_itemsInput, {nullable:false})
    items!: ItemsCreateNestedOneWithoutMachines_itemsInput;

    @HideField()
    block!: BlockCreateNestedOneWithoutMachines_itemsInput;
}
