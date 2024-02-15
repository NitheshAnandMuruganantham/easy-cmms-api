import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SectionsCountAggregate } from './sections-count-aggregate.output';
import { SectionsAvgAggregate } from './sections-avg-aggregate.output';
import { SectionsSumAggregate } from './sections-sum-aggregate.output';
import { SectionsMinAggregate } from './sections-min-aggregate.output';
import { SectionsMaxAggregate } from './sections-max-aggregate.output';

@ObjectType()
export class AggregateSections {

    @Field(() => SectionsCountAggregate, {nullable:true})
    _count?: SectionsCountAggregate;

    @Field(() => SectionsAvgAggregate, {nullable:true})
    _avg?: SectionsAvgAggregate;

    @Field(() => SectionsSumAggregate, {nullable:true})
    _sum?: SectionsSumAggregate;

    @Field(() => SectionsMinAggregate, {nullable:true})
    _min?: SectionsMinAggregate;

    @Field(() => SectionsMaxAggregate, {nullable:true})
    _max?: SectionsMaxAggregate;
}
