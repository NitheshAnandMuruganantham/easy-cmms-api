import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLBigInt } from 'graphql-scalars';
import { Users } from '../users/users.model';
import { Block } from '../block/block.model';

@ObjectType()
export class production_data {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => GraphQLJSON, {nullable:false,defaultValue:'{}'})
    production!: any;

    @Field(() => String, {nullable:false})
    shift!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => GraphQLBigInt, {nullable:false})
    updated_by!: bigint;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => GraphQLBigInt, {nullable:true})
    blockId!: bigint | null;

    @Field(() => Users, {nullable:false})
    updatedBy?: Users;

    @Field(() => Block, {nullable:true})
    Block?: Block | null;
}
