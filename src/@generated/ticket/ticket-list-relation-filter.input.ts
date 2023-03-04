import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereInput } from './ticket-where.input';

@InputType()
export class TicketListRelationFilter {

    @Field(() => TicketWhereInput, {nullable:true})
    every?: TicketWhereInput;

    @Field(() => TicketWhereInput, {nullable:true})
    some?: TicketWhereInput;

    @Field(() => TicketWhereInput, {nullable:true})
    none?: TicketWhereInput;
}
