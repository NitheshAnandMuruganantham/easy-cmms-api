import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLBigInt } from 'graphql-scalars';
import { MaintenanceCountAggregate } from './maintenance-count-aggregate.output';
import { MaintenanceAvgAggregate } from './maintenance-avg-aggregate.output';
import { MaintenanceSumAggregate } from './maintenance-sum-aggregate.output';
import { MaintenanceMinAggregate } from './maintenance-min-aggregate.output';
import { MaintenanceMaxAggregate } from './maintenance-max-aggregate.output';

@ObjectType()
export class MaintenanceGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    photo?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    from!: Date | string;

    @Field(() => Date, {nullable:false})
    to!: Date | string;

    @Field(() => Boolean, {nullable:false})
    resolved!: boolean;

    @Field(() => GraphQLJSON, {nullable:false})
    metadata!: any;

    @Field(() => Boolean, {nullable:false})
    un_planned!: boolean;

    @Field(() => Date, {nullable:true})
    elapsed?: Date | string;

    @Field(() => GraphQLBigInt, {nullable:false})
    assignee_id!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    machine_id!: bigint | number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => MaintenanceCountAggregate, {nullable:true})
    _count?: MaintenanceCountAggregate;

    @Field(() => MaintenanceAvgAggregate, {nullable:true})
    _avg?: MaintenanceAvgAggregate;

    @Field(() => MaintenanceSumAggregate, {nullable:true})
    _sum?: MaintenanceSumAggregate;

    @Field(() => MaintenanceMinAggregate, {nullable:true})
    _min?: MaintenanceMinAggregate;

    @Field(() => MaintenanceMaxAggregate, {nullable:true})
    _max?: MaintenanceMaxAggregate;
}
