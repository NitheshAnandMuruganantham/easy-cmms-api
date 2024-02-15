import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MaintenanceCountAggregate } from './maintenance-count-aggregate.output';
import { MaintenanceAvgAggregate } from './maintenance-avg-aggregate.output';
import { MaintenanceSumAggregate } from './maintenance-sum-aggregate.output';
import { MaintenanceMinAggregate } from './maintenance-min-aggregate.output';
import { MaintenanceMaxAggregate } from './maintenance-max-aggregate.output';

@ObjectType()
export class AggregateMaintenance {

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
