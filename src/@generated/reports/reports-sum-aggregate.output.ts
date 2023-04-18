import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class ReportsSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    validated?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    validated_sign?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    maintance_id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    block_id?: bigint | number;
}
