import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { ticket_status } from '../prisma/ticket-status.enum';

@InputType()
export class TicketUncheckedCreateWithoutMaintenanceInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    photos!: string;

    @HideField()
    user_id!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    machine_id!: bigint | number;

    @Field(() => ticket_status, {nullable:false})
    status!: keyof typeof ticket_status;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @HideField()
    block_id!: bigint | number;
}
