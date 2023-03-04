import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class MaintenanceMinAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    photo?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => Boolean, {nullable:true})
    resolved?: boolean;

    @Field(() => Boolean, {nullable:true})
    un_planned?: boolean;

    @Field(() => Date, {nullable:true})
    elapsed?: Date | string;

    @Field(() => GraphQLBigInt, {nullable:true})
    assignee_id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    machine_id?: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
