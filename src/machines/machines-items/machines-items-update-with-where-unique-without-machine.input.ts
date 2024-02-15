import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';
import { Type } from 'class-transformer';
import { machines_itemsUpdateWithoutMachineInput } from './machines-items-update-without-machine.input';

@InputType()
export class machines_itemsUpdateWithWhereUniqueWithoutMachineInput {

    @Field(() => machines_itemsWhereUniqueInput, {nullable:false})
    @Type(() => machines_itemsWhereUniqueInput)
    where!: machines_itemsWhereUniqueInput;

    @Field(() => machines_itemsUpdateWithoutMachineInput, {nullable:false})
    @Type(() => machines_itemsUpdateWithoutMachineInput)
    data!: machines_itemsUpdateWithoutMachineInput;
}
