import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutMachine_catagoryInput } from './machines-update-without-machine-catagory.input';

@InputType()
export class MachinesUpdateWithWhereUniqueWithoutMachine_catagoryInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: MachinesWhereUniqueInput;

    @Field(() => MachinesUpdateWithoutMachine_catagoryInput, {nullable:false})
    @Type(() => MachinesUpdateWithoutMachine_catagoryInput)
    data!: MachinesUpdateWithoutMachine_catagoryInput;
}
