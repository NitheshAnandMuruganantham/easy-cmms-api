import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { Invoice_itemsCountAggregate } from './invoice-items-count-aggregate.output';
import { Invoice_itemsAvgAggregate } from './invoice-items-avg-aggregate.output';
import { Invoice_itemsSumAggregate } from './invoice-items-sum-aggregate.output';
import { Invoice_itemsMinAggregate } from './invoice-items-min-aggregate.output';
import { Invoice_itemsMaxAggregate } from './invoice-items-max-aggregate.output';

@ObjectType()
export class Invoice_itemsGroupBy {
  @Field(() => GraphQLBigInt, { nullable: false })
  id!: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  invoice_id!: bigint | number;

  @Field(() => Float, { nullable: false })
  unit_price!: number;

  @Field(() => Float, { nullable: false })
  quantity!: number;

  @Field(() => Float, { nullable: false })
  amount!: number;

  @Field(() => GraphQLBigInt, { nullable: false })
  item_id!: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint | number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: false })
  updated_at!: Date | string;

  @Field(() => Invoice_itemsCountAggregate, { nullable: true })
  _count?: Invoice_itemsCountAggregate;

  @Field(() => Invoice_itemsAvgAggregate, { nullable: true })
  _avg?: Invoice_itemsAvgAggregate;

  @Field(() => Invoice_itemsSumAggregate, { nullable: true })
  _sum?: Invoice_itemsSumAggregate;

  @Field(() => Invoice_itemsMinAggregate, { nullable: true })
  _min?: Invoice_itemsMinAggregate;

  @Field(() => Invoice_itemsMaxAggregate, { nullable: true })
  _max?: Invoice_itemsMaxAggregate;
}
