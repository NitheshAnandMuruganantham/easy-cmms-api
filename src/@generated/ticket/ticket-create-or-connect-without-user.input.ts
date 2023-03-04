import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutUserInput } from './ticket-create-without-user.input';

@InputType()
export class TicketCreateOrConnectWithoutUserInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: TicketWhereUniqueInput;

    @Field(() => TicketCreateWithoutUserInput, {nullable:false})
    @Type(() => TicketCreateWithoutUserInput)
    create!: TicketCreateWithoutUserInput;
}
