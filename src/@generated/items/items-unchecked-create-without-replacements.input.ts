import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { machines_itemsUncheckedCreateNestedManyWithoutItemsInput } from '../machines-items/machines-items-unchecked-create-nested-many-without-items.input';

@InputType()
export class ItemsUncheckedCreateWithoutReplacementsInput {

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

    @Field(() => GraphQLBigInt, {nullable:false})
    catagory_id!: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @HideField()
    block_id!: bigint | number;

    @Field(() => machines_itemsUncheckedCreateNestedManyWithoutItemsInput, {nullable:true})
    machines_items?: machines_itemsUncheckedCreateNestedManyWithoutItemsInput;
}
