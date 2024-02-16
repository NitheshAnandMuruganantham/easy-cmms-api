import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { invoice_itemsCountOrderByAggregateInput } from './invoice-items-count-order-by-aggregate.input';
import { invoice_itemsAvgOrderByAggregateInput } from './invoice-items-avg-order-by-aggregate.input';
import { invoice_itemsMaxOrderByAggregateInput } from './invoice-items-max-order-by-aggregate.input';
import { invoice_itemsMinOrderByAggregateInput } from './invoice-items-min-order-by-aggregate.input';
import { invoice_itemsSumOrderByAggregateInput } from './invoice-items-sum-order-by-aggregate.input';

@InputType()
export class invoice_itemsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  invoice_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  unit_price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  quantity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item_id?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => invoice_itemsCountOrderByAggregateInput, { nullable: true })
  _count?: invoice_itemsCountOrderByAggregateInput;

  @Field(() => invoice_itemsAvgOrderByAggregateInput, { nullable: true })
  _avg?: invoice_itemsAvgOrderByAggregateInput;

  @Field(() => invoice_itemsMaxOrderByAggregateInput, { nullable: true })
  _max?: invoice_itemsMaxOrderByAggregateInput;

  @Field(() => invoice_itemsMinOrderByAggregateInput, { nullable: true })
  _min?: invoice_itemsMinOrderByAggregateInput;

  @Field(() => invoice_itemsSumOrderByAggregateInput, { nullable: true })
  _sum?: invoice_itemsSumOrderByAggregateInput;
}
