import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketCreateInput } from './ticket-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTicketArgs {

    @Field(() => TicketCreateInput, {nullable:false})
    @Type(() => TicketCreateInput)
    data!: TicketCreateInput;
}
