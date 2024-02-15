import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutTicketInput } from './machines-create-without-ticket.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutTicketInput } from './machines-create-or-connect-without-ticket.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesCreateNestedOneWithoutTicketInput {

    @Field(() => MachinesCreateWithoutTicketInput, {nullable:true})
    @Type(() => MachinesCreateWithoutTicketInput)
    create?: MachinesCreateWithoutTicketInput;

    @Field(() => MachinesCreateOrConnectWithoutTicketInput, {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutTicketInput)
    connectOrCreate?: MachinesCreateOrConnectWithoutTicketInput;

    @Field(() => MachinesWhereUniqueInput, {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: MachinesWhereUniqueInput;
}
