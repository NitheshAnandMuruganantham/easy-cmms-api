import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TicketCountAggregate } from './ticket-count-aggregate.output';
import { TicketAvgAggregate } from './ticket-avg-aggregate.output';
import { TicketSumAggregate } from './ticket-sum-aggregate.output';
import { TicketMinAggregate } from './ticket-min-aggregate.output';
import { TicketMaxAggregate } from './ticket-max-aggregate.output';

@ObjectType()
export class AggregateTicket {

    @Field(() => TicketCountAggregate, {nullable:true})
    _count?: TicketCountAggregate;

    @Field(() => TicketAvgAggregate, {nullable:true})
    _avg?: TicketAvgAggregate;

    @Field(() => TicketSumAggregate, {nullable:true})
    _sum?: TicketSumAggregate;

    @Field(() => TicketMinAggregate, {nullable:true})
    _min?: TicketMinAggregate;

    @Field(() => TicketMaxAggregate, {nullable:true})
    _max?: TicketMaxAggregate;
}
