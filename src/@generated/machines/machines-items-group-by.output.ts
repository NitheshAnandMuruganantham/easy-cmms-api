import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Machines_itemsCountAggregate } from './machines-items-count-aggregate.output';
import { Machines_itemsAvgAggregate } from '../prisma/machines-items-avg-aggregate.output';
import { Machines_itemsSumAggregate } from '../prisma/machines-items-sum-aggregate.output';
import { Machines_itemsMinAggregate } from '../prisma/machines-items-min-aggregate.output';
import { Machines_itemsMaxAggregate } from '../prisma/machines-items-max-aggregate.output';

@ObjectType()
export class Machines_itemsGroupBy {

    @Field(() => GraphQLBigInt, {nullable:false})
    id!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    machine_id!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    item_id!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    block_id!: bigint | number;

    @Field(() => Machines_itemsCountAggregate, {nullable:true})
    _count?: Machines_itemsCountAggregate;

    @Field(() => Machines_itemsAvgAggregate, {nullable:true})
    _avg?: Machines_itemsAvgAggregate;

    @Field(() => Machines_itemsSumAggregate, {nullable:true})
    _sum?: Machines_itemsSumAggregate;

    @Field(() => Machines_itemsMinAggregate, {nullable:true})
    _min?: Machines_itemsMinAggregate;

    @Field(() => Machines_itemsMaxAggregate, {nullable:true})
    _max?: Machines_itemsMaxAggregate;
}
