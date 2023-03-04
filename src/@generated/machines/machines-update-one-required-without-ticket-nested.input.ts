import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutTicketInput } from './machines-create-without-ticket.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutTicketInput } from './machines-create-or-connect-without-ticket.input';
import { MachinesUpsertWithoutTicketInput } from './machines-upsert-without-ticket.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { MachinesUpdateWithoutTicketInput } from './machines-update-without-ticket.input';

@InputType()
export class MachinesUpdateOneRequiredWithoutTicketNestedInput {

    @Field(() => MachinesCreateWithoutTicketInput, {nullable:true})
    @Type(() => MachinesCreateWithoutTicketInput)
    create?: MachinesCreateWithoutTicketInput;

    @Field(() => MachinesCreateOrConnectWithoutTicketInput, {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutTicketInput)
    connectOrCreate?: MachinesCreateOrConnectWithoutTicketInput;

    @Field(() => MachinesUpsertWithoutTicketInput, {nullable:true})
    @Type(() => MachinesUpsertWithoutTicketInput)
    upsert?: MachinesUpsertWithoutTicketInput;

    @Field(() => MachinesWhereUniqueInput, {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: MachinesWhereUniqueInput;

    @Field(() => MachinesUpdateWithoutTicketInput, {nullable:true})
    @Type(() => MachinesUpdateWithoutTicketInput)
    update?: MachinesUpdateWithoutTicketInput;
}
