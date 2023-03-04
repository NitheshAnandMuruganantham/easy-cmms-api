import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { NestedBigIntWithAggregatesFilter } from './nested-big-int-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedFloatFilter } from './nested-float-filter.input';
import { NestedBigIntFilter } from './nested-big-int-filter.input';

@InputType()
export class BigIntWithAggregatesFilter {

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

    @Field(() => NestedBigIntWithAggregatesFilter, {nullable:true})
    not?: NestedBigIntWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: NestedFloatFilter;

    @Field(() => NestedBigIntFilter, {nullable:true})
    _sum?: NestedBigIntFilter;

    @Field(() => NestedBigIntFilter, {nullable:true})
    _min?: NestedBigIntFilter;

    @Field(() => NestedBigIntFilter, {nullable:true})
    _max?: NestedBigIntFilter;
}
