import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLBigInt } from 'graphql-scalars';
import { Users } from '../users/users.model';

@ObjectType()
export class production_data {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => GraphQLJSON, {nullable:false,defaultValue:'{}'})
    data!: any;

    @Field(() => Date, {nullable:false})
    from!: Date;

    @Field(() => Date, {nullable:false})
    to!: Date;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => GraphQLBigInt, {nullable:false})
    updated_by!: bigint;

    @Field(() => Users, {nullable:false})
    updatedBy?: Users;
}
