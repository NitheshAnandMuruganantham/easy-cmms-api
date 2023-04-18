import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';
import { Type } from 'class-transformer';
import { machines_itemsUpdateWithoutMachineInput } from './machines-items-update-without-machine.input';
import { machines_itemsCreateWithoutMachineInput } from './machines-items-create-without-machine.input';

@InputType()
export class machines_itemsUpsertWithWhereUniqueWithoutMachineInput {

    @Field(() => machines_itemsWhereUniqueInput, {nullable:false})
    @Type(() => machines_itemsWhereUniqueInput)
    where!: machines_itemsWhereUniqueInput;

    @Field(() => machines_itemsUpdateWithoutMachineInput, {nullable:false})
    @Type(() => machines_itemsUpdateWithoutMachineInput)
    update!: machines_itemsUpdateWithoutMachineInput;

    @Field(() => machines_itemsCreateWithoutMachineInput, {nullable:false})
    @Type(() => machines_itemsCreateWithoutMachineInput)
    create!: machines_itemsCreateWithoutMachineInput;
}
