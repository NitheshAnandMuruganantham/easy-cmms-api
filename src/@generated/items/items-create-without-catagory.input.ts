import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { ReplacementsCreateNestedManyWithoutItemsInput } from '../replacements/replacements-create-nested-many-without-items.input';
import { BlockCreateNestedOneWithoutItemsInput } from '../block/block-create-nested-one-without-items.input';
import { HideField } from '@nestjs/graphql';
import { invoice_itemsCreateNestedManyWithoutItemInput } from '../invoice-items/invoice-items-create-nested-many-without-item.input';

@InputType()
export class ItemsCreateWithoutCatagoryInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Float, {nullable:false})
    unit_price!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ReplacementsCreateNestedManyWithoutItemsInput, {nullable:true})
    replacements?: ReplacementsCreateNestedManyWithoutItemsInput;

    @HideField()
    block!: BlockCreateNestedOneWithoutItemsInput;

    @Field(() => invoice_itemsCreateNestedManyWithoutItemInput, {nullable:true})
    invoice_items?: invoice_itemsCreateNestedManyWithoutItemInput;
}
