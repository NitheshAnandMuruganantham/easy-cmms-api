import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLBigInt } from 'graphql-scalars';
import { Role } from '../prisma/role.enum';
import { UsersCountAggregate } from './users-count-aggregate.output';
import { UsersAvgAggregate } from './users-avg-aggregate.output';
import { UsersSumAggregate } from './users-sum-aggregate.output';
import { UsersMinAggregate } from './users-min-aggregate.output';
import { UsersMaxAggregate } from './users-max-aggregate.output';

@ObjectType()
export class UsersGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint | number;

    @Field(() => GraphQLJSON, {nullable:false})
    profile!: any;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    user_auth_id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLBigInt, {nullable:false})
    blockId!: bigint | number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => [Role], {nullable:true})
    extra_roles?: Array<keyof typeof Role>;

    @Field(() => String, {nullable:false})
    role_alias!: string;

    @Field(() => UsersCountAggregate, {nullable:true})
    _count?: UsersCountAggregate;

    @Field(() => UsersAvgAggregate, {nullable:true})
    _avg?: UsersAvgAggregate;

    @Field(() => UsersSumAggregate, {nullable:true})
    _sum?: UsersSumAggregate;

    @Field(() => UsersMinAggregate, {nullable:true})
    _min?: UsersMinAggregate;

    @Field(() => UsersMaxAggregate, {nullable:true})
    _max?: UsersMaxAggregate;
}
