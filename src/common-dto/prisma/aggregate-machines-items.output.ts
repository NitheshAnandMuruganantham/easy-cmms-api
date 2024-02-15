import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Machines_itemsCountAggregate } from '../../machines/machines/machines-items-count-aggregate.output';
import { Machines_itemsAvgAggregate } from './machines-items-avg-aggregate.output';
import { Machines_itemsSumAggregate } from './machines-items-sum-aggregate.output';
import { Machines_itemsMinAggregate } from './machines-items-min-aggregate.output';
import { Machines_itemsMaxAggregate } from './machines-items-max-aggregate.output';

@ObjectType()
export class AggregateMachines_items {
  @Field(() => Machines_itemsCountAggregate, { nullable: true })
  _count?: Machines_itemsCountAggregate;

  @Field(() => Machines_itemsAvgAggregate, { nullable: true })
  _avg?: Machines_itemsAvgAggregate;

  @Field(() => Machines_itemsSumAggregate, { nullable: true })
  _sum?: Machines_itemsSumAggregate;

  @Field(() => Machines_itemsMinAggregate, { nullable: true })
  _min?: Machines_itemsMinAggregate;

  @Field(() => Machines_itemsMaxAggregate, { nullable: true })
  _max?: Machines_itemsMaxAggregate;
}
