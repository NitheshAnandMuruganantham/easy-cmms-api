import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';
import { Type } from 'class-transformer';
import { machines_itemsCreateWithoutBlockInput } from './machines-items-create-without-block.input';

@InputType()
export class machines_itemsCreateOrConnectWithoutBlockInput {

    @Field(() => machines_itemsWhereUniqueInput, {nullable:false})
    @Type(() => machines_itemsWhereUniqueInput)
    where!: machines_itemsWhereUniqueInput;

    @Field(() => machines_itemsCreateWithoutBlockInput, {nullable:false})
    @Type(() => machines_itemsCreateWithoutBlockInput)
    create!: machines_itemsCreateWithoutBlockInput;
}
