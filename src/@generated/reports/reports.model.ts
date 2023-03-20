import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLBigInt } from 'graphql-scalars';
import { Maintenance } from '../maintenance/maintenance.model';

@ObjectType()
export class Reports {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:false})
    report!: string;

    @Field(() => String, {nullable:false})
    sign!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    tag!: any;

    @Field(() => GraphQLBigInt, {nullable:false})
    validated!: bigint;

    @Field(() => GraphQLBigInt, {nullable:false})
    validated_sign!: bigint;

    @Field(() => GraphQLBigInt, {nullable:false})
    maintance_id!: bigint;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Maintenance, {nullable:false})
    maintenance?: Maintenance;
}
