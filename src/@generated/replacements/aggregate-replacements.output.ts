import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReplacementsCountAggregate } from './replacements-count-aggregate.output';
import { ReplacementsAvgAggregate } from './replacements-avg-aggregate.output';
import { ReplacementsSumAggregate } from './replacements-sum-aggregate.output';
import { ReplacementsMinAggregate } from './replacements-min-aggregate.output';
import { ReplacementsMaxAggregate } from './replacements-max-aggregate.output';

@ObjectType()
export class AggregateReplacements {

    @Field(() => ReplacementsCountAggregate, {nullable:true})
    _count?: ReplacementsCountAggregate;

    @Field(() => ReplacementsAvgAggregate, {nullable:true})
    _avg?: ReplacementsAvgAggregate;

    @Field(() => ReplacementsSumAggregate, {nullable:true})
    _sum?: ReplacementsSumAggregate;

    @Field(() => ReplacementsMinAggregate, {nullable:true})
    _min?: ReplacementsMinAggregate;

    @Field(() => ReplacementsMaxAggregate, {nullable:true})
    _max?: ReplacementsMaxAggregate;
}
