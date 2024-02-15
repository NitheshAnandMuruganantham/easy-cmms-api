import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateManyMachinesInput } from './ticket-create-many-machines.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketCreateManyMachinesInputEnvelope {

    @Field(() => [TicketCreateManyMachinesInput], {nullable:false})
    @Type(() => TicketCreateManyMachinesInput)
    data!: Array<TicketCreateManyMachinesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
