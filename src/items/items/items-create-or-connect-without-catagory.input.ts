import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutCatagoryInput } from './items-create-without-catagory.input';

@InputType()
export class ItemsCreateOrConnectWithoutCatagoryInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: ItemsWhereUniqueInput;

    @Field(() => ItemsCreateWithoutCatagoryInput, {nullable:false})
    @Type(() => ItemsCreateWithoutCatagoryInput)
    create!: ItemsCreateWithoutCatagoryInput;
}
