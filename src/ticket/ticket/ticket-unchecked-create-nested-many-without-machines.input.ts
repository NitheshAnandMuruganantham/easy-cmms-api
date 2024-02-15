import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutMachinesInput } from './ticket-create-without-machines.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutMachinesInput } from './ticket-create-or-connect-without-machines.input';
import { TicketCreateManyMachinesInputEnvelope } from './ticket-create-many-machines-input-envelope.input';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';

@InputType()
export class TicketUncheckedCreateNestedManyWithoutMachinesInput {

    @Field(() => [TicketCreateWithoutMachinesInput], {nullable:true})
    @Type(() => TicketCreateWithoutMachinesInput)
    create?: Array<TicketCreateWithoutMachinesInput>;

    @Field(() => [TicketCreateOrConnectWithoutMachinesInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutMachinesInput>;

    @Field(() => TicketCreateManyMachinesInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyMachinesInputEnvelope)
    createMany?: TicketCreateManyMachinesInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<TicketWhereUniqueInput>;
}
