import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { catagoryCreateNestedOneWithoutItemsInput } from '../catagory/catagory-create-nested-one-without-items.input';
import { BlockCreateNestedOneWithoutItemsInput } from '../block/block-create-nested-one-without-items.input';
import { HideField } from '@nestjs/graphql';
import { machines_itemsCreateNestedManyWithoutItemsInput } from '../machines-items/machines-items-create-nested-many-without-items.input';

@InputType()
export class ItemsCreateWithoutReplacementsInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Float, {nullable:false})
    unit_price!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => catagoryCreateNestedOneWithoutItemsInput, {nullable:false})
    catagory!: catagoryCreateNestedOneWithoutItemsInput;

    @HideField()
    block!: BlockCreateNestedOneWithoutItemsInput;

    @Field(() => machines_itemsCreateNestedManyWithoutItemsInput, {nullable:true})
    machines_items?: machines_itemsCreateNestedManyWithoutItemsInput;
}
