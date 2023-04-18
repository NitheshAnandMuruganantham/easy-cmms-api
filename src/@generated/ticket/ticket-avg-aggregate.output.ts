import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TicketAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    user_id?: number;

    @Field(() => Float, {nullable:true})
    maintenance_id?: number;

    @Field(() => Float, {nullable:true})
    machine_id?: number;

    @Field(() => Float, {nullable:true})
    block_id?: number;
}
