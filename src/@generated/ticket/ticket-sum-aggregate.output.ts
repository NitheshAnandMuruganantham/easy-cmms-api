import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class TicketSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    user_id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    maintenance_id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    machine_id?: bigint | number;
}
