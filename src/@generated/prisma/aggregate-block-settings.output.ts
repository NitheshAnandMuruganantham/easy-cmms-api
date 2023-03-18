import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Block_settingsCountAggregate } from './block-settings-count-aggregate.output';
import { Block_settingsAvgAggregate } from '../block/block-settings-avg-aggregate.output';
import { Block_settingsSumAggregate } from '../block/block-settings-sum-aggregate.output';
import { Block_settingsMinAggregate } from '../block/block-settings-min-aggregate.output';
import { Block_settingsMaxAggregate } from '../block/block-settings-max-aggregate.output';

@ObjectType()
export class AggregateBlock_settings {

    @Field(() => Block_settingsCountAggregate, {nullable:true})
    _count?: Block_settingsCountAggregate;

    @Field(() => Block_settingsAvgAggregate, {nullable:true})
    _avg?: Block_settingsAvgAggregate;

    @Field(() => Block_settingsSumAggregate, {nullable:true})
    _sum?: Block_settingsSumAggregate;

    @Field(() => Block_settingsMinAggregate, {nullable:true})
    _min?: Block_settingsMinAggregate;

    @Field(() => Block_settingsMaxAggregate, {nullable:true})
    _max?: Block_settingsMaxAggregate;
}
