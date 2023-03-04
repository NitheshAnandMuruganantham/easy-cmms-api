import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCatagoryCreateWithoutItemsInput } from './item-catagory-create-without-items.input';
import { Type } from 'class-transformer';
import { ItemCatagoryCreateOrConnectWithoutItemsInput } from './item-catagory-create-or-connect-without-items.input';
import { ItemCatagoryWhereUniqueInput } from './item-catagory-where-unique.input';

@InputType()
export class ItemCatagoryCreateNestedOneWithoutItemsInput {

    @Field(() => ItemCatagoryCreateWithoutItemsInput, {nullable:true})
    @Type(() => ItemCatagoryCreateWithoutItemsInput)
    create?: ItemCatagoryCreateWithoutItemsInput;

    @Field(() => ItemCatagoryCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => ItemCatagoryCreateOrConnectWithoutItemsInput)
    connectOrCreate?: ItemCatagoryCreateOrConnectWithoutItemsInput;

    @Field(() => ItemCatagoryWhereUniqueInput, {nullable:true})
    @Type(() => ItemCatagoryWhereUniqueInput)
    connect?: ItemCatagoryWhereUniqueInput;
}
