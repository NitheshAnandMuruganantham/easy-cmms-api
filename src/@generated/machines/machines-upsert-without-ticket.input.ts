import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesUpdateWithoutTicketInput } from './machines-update-without-ticket.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutTicketInput } from './machines-create-without-ticket.input';

@InputType()
export class MachinesUpsertWithoutTicketInput {

    @Field(() => MachinesUpdateWithoutTicketInput, {nullable:false})
    @Type(() => MachinesUpdateWithoutTicketInput)
    update!: MachinesUpdateWithoutTicketInput;

    @Field(() => MachinesCreateWithoutTicketInput, {nullable:false})
    @Type(() => MachinesCreateWithoutTicketInput)
    create!: MachinesCreateWithoutTicketInput;
}
