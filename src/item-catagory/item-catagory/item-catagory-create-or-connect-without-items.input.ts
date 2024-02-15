import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCatagoryWhereUniqueInput } from './item-catagory-where-unique.input';
import { Type } from 'class-transformer';
import { ItemCatagoryCreateWithoutItemsInput } from './item-catagory-create-without-items.input';

@InputType()
export class ItemCatagoryCreateOrConnectWithoutItemsInput {

    @Field(() => ItemCatagoryWhereUniqueInput, {nullable:false})
    @Type(() => ItemCatagoryWhereUniqueInput)
    where!: ItemCatagoryWhereUniqueInput;

    @Field(() => ItemCatagoryCreateWithoutItemsInput, {nullable:false})
    @Type(() => ItemCatagoryCreateWithoutItemsInput)
    create!: ItemCatagoryCreateWithoutItemsInput;
}
