import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { Users } from '../users/users.model';
import { Machines } from '../machines/machines.model';

@ObjectType()
export class routine_maintanances {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    cron!: string;

    @Field(() => String, {nullable:false})
    from!: string;

    @Field(() => String, {nullable:false})
    to!: string;

    @Field(() => GraphQLBigInt, {nullable:false})
    assignee_id!: bigint;

    @Field(() => Users, {nullable:false})
    assignee?: Users;

    @Field(() => GraphQLBigInt, {nullable:false})
    meachine_id!: bigint;

    @Field(() => Machines, {nullable:false})
    meachine?: Machines;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
