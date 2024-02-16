import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../../common-dto/prisma/sort-order.enum';
import { block_settingsCountOrderByAggregateInput } from './block-settings-count-order-by-aggregate.input';
import { block_settingsAvgOrderByAggregateInput } from './block-settings-avg-order-by-aggregate.input';
import { block_settingsMaxOrderByAggregateInput } from './block-settings-max-order-by-aggregate.input';
import { block_settingsMinOrderByAggregateInput } from './block-settings-min-order-by-aggregate.input';
import { block_settingsSumOrderByAggregateInput } from './block-settings-sum-order-by-aggregate.input';

@InputType()
export class block_settingsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  block_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  value?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => block_settingsCountOrderByAggregateInput, { nullable: true })
  _count?: block_settingsCountOrderByAggregateInput;

  @Field(() => block_settingsAvgOrderByAggregateInput, { nullable: true })
  _avg?: block_settingsAvgOrderByAggregateInput;

  @Field(() => block_settingsMaxOrderByAggregateInput, { nullable: true })
  _max?: block_settingsMaxOrderByAggregateInput;

  @Field(() => block_settingsMinOrderByAggregateInput, { nullable: true })
  _min?: block_settingsMinOrderByAggregateInput;

  @Field(() => block_settingsSumOrderByAggregateInput, { nullable: true })
  _sum?: block_settingsSumOrderByAggregateInput;
}
