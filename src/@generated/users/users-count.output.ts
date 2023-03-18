import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersCount {

    @Field(() => Int, {nullable:false})
    maintenance?: number;

    @Field(() => Int, {nullable:false})
    ticket?: number;

    @Field(() => Int, {nullable:false})
    routine_maintanances?: number;

    @Field(() => Int, {nullable:false})
    production_data?: number;
}
