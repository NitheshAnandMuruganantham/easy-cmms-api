import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';
import { NestedBigIntNullableFilter } from './nested-big-int-nullable-filter.input';

@InputType()
export class NestedBigIntNullableWithAggregatesFilter {

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

    @Field(() => NestedBigIntNullableWithAggregatesFilter, {nullable:true})
    not?: NestedBigIntNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: NestedFloatNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _sum?: NestedBigIntNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _min?: NestedBigIntNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _max?: NestedBigIntNullableFilter;
}
