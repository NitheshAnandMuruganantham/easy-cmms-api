import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ItemsCountAggregate } from './items-count-aggregate.output';
import { ItemsAvgAggregate } from './items-avg-aggregate.output';
import { ItemsSumAggregate } from './items-sum-aggregate.output';
import { ItemsMinAggregate } from './items-min-aggregate.output';
import { ItemsMaxAggregate } from './items-max-aggregate.output';

@ObjectType()
export class AggregateItems {

    @Field(() => ItemsCountAggregate, {nullable:true})
    _count?: ItemsCountAggregate;

    @Field(() => ItemsAvgAggregate, {nullable:true})
    _avg?: ItemsAvgAggregate;

    @Field(() => ItemsSumAggregate, {nullable:true})
    _sum?: ItemsSumAggregate;

    @Field(() => ItemsMinAggregate, {nullable:true})
    _min?: ItemsMinAggregate;

    @Field(() => ItemsMaxAggregate, {nullable:true})
    _max?: ItemsMaxAggregate;
}
