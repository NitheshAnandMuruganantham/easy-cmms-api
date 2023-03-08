import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { MachinesCountAggregate } from './machines-count-aggregate.output';
import { MachinesAvgAggregate } from './machines-avg-aggregate.output';
import { MachinesSumAggregate } from './machines-sum-aggregate.output';
import { MachinesMinAggregate } from './machines-min-aggregate.output';
import { MachinesMaxAggregate } from './machines-max-aggregate.output';

@ObjectType()
export class MachinesGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLBigInt, {nullable:false})
    section_id!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    block_id!: bigint | number;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    profile!: any;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => GraphQLBigInt, {nullable:true})
    machine_catagory_id?: bigint | number;

    @Field(() => MachinesCountAggregate, {nullable:true})
    _count?: MachinesCountAggregate;

    @Field(() => MachinesAvgAggregate, {nullable:true})
    _avg?: MachinesAvgAggregate;

    @Field(() => MachinesSumAggregate, {nullable:true})
    _sum?: MachinesSumAggregate;

    @Field(() => MachinesMinAggregate, {nullable:true})
    _min?: MachinesMinAggregate;

    @Field(() => MachinesMaxAggregate, {nullable:true})
    _max?: MachinesMaxAggregate;
}
