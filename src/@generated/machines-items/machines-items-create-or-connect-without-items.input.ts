import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';
import { Type } from 'class-transformer';
import { machines_itemsCreateWithoutItemsInput } from './machines-items-create-without-items.input';

@InputType()
export class machines_itemsCreateOrConnectWithoutItemsInput {

    @Field(() => machines_itemsWhereUniqueInput, {nullable:false})
    @Type(() => machines_itemsWhereUniqueInput)
    where!: machines_itemsWhereUniqueInput;

    @Field(() => machines_itemsCreateWithoutItemsInput, {nullable:false})
    @Type(() => machines_itemsCreateWithoutItemsInput)
    create!: machines_itemsCreateWithoutItemsInput;
}
