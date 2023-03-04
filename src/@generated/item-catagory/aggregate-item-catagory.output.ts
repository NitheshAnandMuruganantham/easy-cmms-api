import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ItemCatagoryCountAggregate } from './item-catagory-count-aggregate.output';
import { ItemCatagoryAvgAggregate } from './item-catagory-avg-aggregate.output';
import { ItemCatagorySumAggregate } from './item-catagory-sum-aggregate.output';
import { ItemCatagoryMinAggregate } from './item-catagory-min-aggregate.output';
import { ItemCatagoryMaxAggregate } from './item-catagory-max-aggregate.output';

@ObjectType()
export class AggregateItemCatagory {

    @Field(() => ItemCatagoryCountAggregate, {nullable:true})
    _count?: ItemCatagoryCountAggregate;

    @Field(() => ItemCatagoryAvgAggregate, {nullable:true})
    _avg?: ItemCatagoryAvgAggregate;

    @Field(() => ItemCatagorySumAggregate, {nullable:true})
    _sum?: ItemCatagorySumAggregate;

    @Field(() => ItemCatagoryMinAggregate, {nullable:true})
    _min?: ItemCatagoryMinAggregate;

    @Field(() => ItemCatagoryMaxAggregate, {nullable:true})
    _max?: ItemCatagoryMaxAggregate;
}
