import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class UsersSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    blockId?: bigint | number;
}
