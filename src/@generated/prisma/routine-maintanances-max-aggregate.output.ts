import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class Routine_maintanancesMaxAggregate {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    cron?: string;

    @Field(() => String, {nullable:true})
    from?: string;

    @Field(() => String, {nullable:true})
    to?: string;

    @Field(() => GraphQLBigInt, {nullable:true})
    assignee_id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    meachine_id?: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
