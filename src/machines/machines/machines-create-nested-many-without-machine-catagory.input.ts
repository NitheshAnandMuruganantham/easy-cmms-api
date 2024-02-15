import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutMachine_catagoryInput } from './machines-create-without-machine-catagory.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutMachine_catagoryInput } from './machines-create-or-connect-without-machine-catagory.input';
import { MachinesCreateManyMachine_catagoryInputEnvelope } from './machines-create-many-machine-catagory-input-envelope.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesCreateNestedManyWithoutMachine_catagoryInput {

    @Field(() => [MachinesCreateWithoutMachine_catagoryInput], {nullable:true})
    @Type(() => MachinesCreateWithoutMachine_catagoryInput)
    create?: Array<MachinesCreateWithoutMachine_catagoryInput>;

    @Field(() => [MachinesCreateOrConnectWithoutMachine_catagoryInput], {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutMachine_catagoryInput)
    connectOrCreate?: Array<MachinesCreateOrConnectWithoutMachine_catagoryInput>;

    @Field(() => MachinesCreateManyMachine_catagoryInputEnvelope, {nullable:true})
    @Type(() => MachinesCreateManyMachine_catagoryInputEnvelope)
    createMany?: MachinesCreateManyMachine_catagoryInputEnvelope;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: Array<MachinesWhereUniqueInput>;
}
