import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutMachinesInput } from './ticket-update-without-machines.input';
import { TicketCreateWithoutMachinesInput } from './ticket-create-without-machines.input';

@InputType()
export class TicketUpsertWithWhereUniqueWithoutMachinesInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: TicketWhereUniqueInput;

    @Field(() => TicketUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => TicketUpdateWithoutMachinesInput)
    update!: TicketUpdateWithoutMachinesInput;

    @Field(() => TicketCreateWithoutMachinesInput, {nullable:false})
    @Type(() => TicketCreateWithoutMachinesInput)
    create!: TicketCreateWithoutMachinesInput;
}
