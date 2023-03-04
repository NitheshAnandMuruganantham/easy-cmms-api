import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCreateInput } from './ticket-create.input';
import { TicketUpdateInput } from './ticket-update.input';

@ArgsType()
export class UpsertOneTicketArgs {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: TicketWhereUniqueInput;

    @Field(() => TicketCreateInput, {nullable:false})
    @Type(() => TicketCreateInput)
    create!: TicketCreateInput;

    @Field(() => TicketUpdateInput, {nullable:false})
    @Type(() => TicketUpdateInput)
    update!: TicketUpdateInput;
}
