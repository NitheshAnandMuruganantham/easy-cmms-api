import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { Block_settingsCountAggregate } from './block-settings-count-aggregate.output';
import { Block_settingsAvgAggregate } from '../../block/block/block-settings-avg-aggregate.output';
import { Block_settingsSumAggregate } from '../../block/block/block-settings-sum-aggregate.output';
import { Block_settingsMinAggregate } from '../../block/block/block-settings-min-aggregate.output';
import { Block_settingsMaxAggregate } from '../../block/block/block-settings-max-aggregate.output';

@ObjectType()
export class Block_settingsGroupBy {
  @Field(() => GraphQLBigInt, { nullable: false })
  id!: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  value!: any;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: false })
  updated_at!: Date | string;

  @Field(() => Block_settingsCountAggregate, { nullable: true })
  _count?: Block_settingsCountAggregate;

  @Field(() => Block_settingsAvgAggregate, { nullable: true })
  _avg?: Block_settingsAvgAggregate;

  @Field(() => Block_settingsSumAggregate, { nullable: true })
  _sum?: Block_settingsSumAggregate;

  @Field(() => Block_settingsMinAggregate, { nullable: true })
  _min?: Block_settingsMinAggregate;

  @Field(() => Block_settingsMaxAggregate, { nullable: true })
  _max?: Block_settingsMaxAggregate;
}
