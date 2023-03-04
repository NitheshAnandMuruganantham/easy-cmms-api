import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutItemCatagoryInput } from './items-create-without-item-catagory.input';

@InputType()
export class ItemsCreateOrConnectWithoutItemCatagoryInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: ItemsWhereUniqueInput;

    @Field(() => ItemsCreateWithoutItemCatagoryInput, {nullable:false})
    @Type(() => ItemsCreateWithoutItemCatagoryInput)
    create!: ItemsCreateWithoutItemCatagoryInput;
}
