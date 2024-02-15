import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutMachines_itemsInput } from './machines-create-without-machines-items.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutMachines_itemsInput } from './machines-create-or-connect-without-machines-items.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesCreateNestedOneWithoutMachines_itemsInput {

    @Field(() => MachinesCreateWithoutMachines_itemsInput, {nullable:true})
    @Type(() => MachinesCreateWithoutMachines_itemsInput)
    create?: MachinesCreateWithoutMachines_itemsInput;

    @Field(() => MachinesCreateOrConnectWithoutMachines_itemsInput, {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutMachines_itemsInput)
    connectOrCreate?: MachinesCreateOrConnectWithoutMachines_itemsInput;

    @Field(() => MachinesWhereUniqueInput, {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: MachinesWhereUniqueInput;
}
