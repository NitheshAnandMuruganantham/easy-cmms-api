import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { ticket_status } from '../prisma/ticket-status.enum';

@ObjectType()
export class TicketMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    photos?: string;

    @Field(() => GraphQLBigInt, {nullable:true})
    user_id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    maintenance_id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    machine_id?: bigint | number;

    @Field(() => ticket_status, {nullable:true})
    status?: keyof typeof ticket_status;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => GraphQLBigInt, {nullable:true})
    block_id?: bigint | number;
}
