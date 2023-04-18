import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutBlockInput } from './ticket-update-without-block.input';

@InputType()
export class TicketUpdateWithWhereUniqueWithoutBlockInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: TicketWhereUniqueInput;

    @Field(() => TicketUpdateWithoutBlockInput, {nullable:false})
    @Type(() => TicketUpdateWithoutBlockInput)
    data!: TicketUpdateWithoutBlockInput;
}
