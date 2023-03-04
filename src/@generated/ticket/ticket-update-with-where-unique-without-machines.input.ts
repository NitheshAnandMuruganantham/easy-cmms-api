import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutMachinesInput } from './ticket-update-without-machines.input';

@InputType()
export class TicketUpdateWithWhereUniqueWithoutMachinesInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: TicketWhereUniqueInput;

    @Field(() => TicketUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => TicketUpdateWithoutMachinesInput)
    data!: TicketUpdateWithoutMachinesInput;
}
