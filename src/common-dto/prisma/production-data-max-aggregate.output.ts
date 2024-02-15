import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class Production_dataMaxAggregate {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:true})
    shift?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => GraphQLBigInt, {nullable:true})
    updated_by?: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => GraphQLBigInt, {nullable:true})
    blockId?: bigint | number;
}
