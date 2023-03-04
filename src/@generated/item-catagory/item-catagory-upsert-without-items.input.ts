import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCatagoryUpdateWithoutItemsInput } from './item-catagory-update-without-items.input';
import { Type } from 'class-transformer';
import { ItemCatagoryCreateWithoutItemsInput } from './item-catagory-create-without-items.input';

@InputType()
export class ItemCatagoryUpsertWithoutItemsInput {

    @Field(() => ItemCatagoryUpdateWithoutItemsInput, {nullable:false})
    @Type(() => ItemCatagoryUpdateWithoutItemsInput)
    update!: ItemCatagoryUpdateWithoutItemsInput;

    @Field(() => ItemCatagoryCreateWithoutItemsInput, {nullable:false})
    @Type(() => ItemCatagoryCreateWithoutItemsInput)
    create!: ItemCatagoryCreateWithoutItemsInput;
}
