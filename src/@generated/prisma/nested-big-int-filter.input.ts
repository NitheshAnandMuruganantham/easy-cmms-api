import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class NestedBigIntFilter {

    @Field(() => GraphQLBigInt, {nullable:true})
    equals?: bigint | number;

    @Field(() => [GraphQLBigInt], {nullable:true})
    in?: Array<bigint> | Array<number>;

    @Field(() => [GraphQLBigInt], {nullable:true})
    notIn?: Array<bigint> | Array<number>;

    @Field(() => GraphQLBigInt, {nullable:true})
    lt?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    lte?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    gt?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    gte?: bigint | number;

    @Field(() => NestedBigIntFilter, {nullable:true})
    not?: NestedBigIntFilter;
}
