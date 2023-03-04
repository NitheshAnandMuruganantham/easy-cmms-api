import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateManyUserInput } from './ticket-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketCreateManyUserInputEnvelope {

    @Field(() => [TicketCreateManyUserInput], {nullable:false})
    @Type(() => TicketCreateManyUserInput)
    data!: Array<TicketCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
