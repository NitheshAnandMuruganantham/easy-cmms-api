import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutMachinesInput } from './ticket-create-without-machines.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutMachinesInput } from './ticket-create-or-connect-without-machines.input';
import { TicketUpsertWithWhereUniqueWithoutMachinesInput } from './ticket-upsert-with-where-unique-without-machines.input';
import { TicketCreateManyMachinesInputEnvelope } from './ticket-create-many-machines-input-envelope.input';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { TicketUpdateWithWhereUniqueWithoutMachinesInput } from './ticket-update-with-where-unique-without-machines.input';
import { TicketUpdateManyWithWhereWithoutMachinesInput } from './ticket-update-many-with-where-without-machines.input';
import { TicketScalarWhereInput } from './ticket-scalar-where.input';

@InputType()
export class TicketUpdateManyWithoutMachinesNestedInput {

    @Field(() => [TicketCreateWithoutMachinesInput], {nullable:true})
    @Type(() => TicketCreateWithoutMachinesInput)
    create?: Array<TicketCreateWithoutMachinesInput>;

    @Field(() => [TicketCreateOrConnectWithoutMachinesInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutMachinesInput>;

    @Field(() => [TicketUpsertWithWhereUniqueWithoutMachinesInput], {nullable:true})
    @Type(() => TicketUpsertWithWhereUniqueWithoutMachinesInput)
    upsert?: Array<TicketUpsertWithWhereUniqueWithoutMachinesInput>;

    @Field(() => TicketCreateManyMachinesInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyMachinesInputEnvelope)
    createMany?: TicketCreateManyMachinesInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    set?: Array<TicketWhereUniqueInput>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    disconnect?: Array<TicketWhereUniqueInput>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    delete?: Array<TicketWhereUniqueInput>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<TicketWhereUniqueInput>;

    @Field(() => [TicketUpdateWithWhereUniqueWithoutMachinesInput], {nullable:true})
    @Type(() => TicketUpdateWithWhereUniqueWithoutMachinesInput)
    update?: Array<TicketUpdateWithWhereUniqueWithoutMachinesInput>;

    @Field(() => [TicketUpdateManyWithWhereWithoutMachinesInput], {nullable:true})
    @Type(() => TicketUpdateManyWithWhereWithoutMachinesInput)
    updateMany?: Array<TicketUpdateManyWithWhereWithoutMachinesInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    @Type(() => TicketScalarWhereInput)
    deleteMany?: Array<TicketScalarWhereInput>;
}
