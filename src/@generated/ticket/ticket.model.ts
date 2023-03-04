import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { Users } from '../users/users.model';
import { Maintenance } from '../maintenance/maintenance.model';
import { Machines } from '../machines/machines.model';
import { ticket_status } from '../prisma/ticket-status.enum';

@ObjectType()
export class Ticket {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    photos!: string;

    @Field(() => GraphQLBigInt, {nullable:false})
    user_id!: bigint;

    @Field(() => Users, {nullable:false})
    user?: Users;

    @Field(() => GraphQLBigInt, {nullable:true})
    maintenance_id!: bigint | null;

    @Field(() => Maintenance, {nullable:true})
    maintenance?: Maintenance | null;

    @Field(() => GraphQLBigInt, {nullable:false})
    machine_id!: bigint;

    @Field(() => Machines, {nullable:false})
    machines?: Machines;

    @Field(() => ticket_status, {nullable:false})
    status!: keyof typeof ticket_status;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
