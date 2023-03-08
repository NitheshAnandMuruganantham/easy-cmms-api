import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Machine_catagoryCountAggregate } from './machine-catagory-count-aggregate.output';
import { Machine_catagoryAvgAggregate } from './machine-catagory-avg-aggregate.output';
import { Machine_catagorySumAggregate } from './machine-catagory-sum-aggregate.output';
import { Machine_catagoryMinAggregate } from './machine-catagory-min-aggregate.output';
import { Machine_catagoryMaxAggregate } from './machine-catagory-max-aggregate.output';

@ObjectType()
export class Machine_catagoryGroupBy {

    @Field(() => GraphQLBigInt, {nullable:false})
    id!: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Machine_catagoryCountAggregate, {nullable:true})
    _count?: Machine_catagoryCountAggregate;

    @Field(() => Machine_catagoryAvgAggregate, {nullable:true})
    _avg?: Machine_catagoryAvgAggregate;

    @Field(() => Machine_catagorySumAggregate, {nullable:true})
    _sum?: Machine_catagorySumAggregate;

    @Field(() => Machine_catagoryMinAggregate, {nullable:true})
    _min?: Machine_catagoryMinAggregate;

    @Field(() => Machine_catagoryMaxAggregate, {nullable:true})
    _max?: Machine_catagoryMaxAggregate;
}
