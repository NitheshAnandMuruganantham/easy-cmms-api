import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class BigIntFieldUpdateOperationsInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    set?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    increment?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    decrement?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    multiply?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    divide?: bigint | number;
}
