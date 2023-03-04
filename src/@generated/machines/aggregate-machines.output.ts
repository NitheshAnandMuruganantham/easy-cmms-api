import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MachinesCountAggregate } from './machines-count-aggregate.output';
import { MachinesAvgAggregate } from './machines-avg-aggregate.output';
import { MachinesSumAggregate } from './machines-sum-aggregate.output';
import { MachinesMinAggregate } from './machines-min-aggregate.output';
import { MachinesMaxAggregate } from './machines-max-aggregate.output';

@ObjectType()
export class AggregateMachines {

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
