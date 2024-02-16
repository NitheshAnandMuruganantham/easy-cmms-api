import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ReportsCountOrderByAggregateInput } from './reports-count-order-by-aggregate.input';
import { ReportsAvgOrderByAggregateInput } from './reports-avg-order-by-aggregate.input';
import { ReportsMaxOrderByAggregateInput } from './reports-max-order-by-aggregate.input';
import { ReportsMinOrderByAggregateInput } from './reports-min-order-by-aggregate.input';
import { ReportsSumOrderByAggregateInput } from './reports-sum-order-by-aggregate.input';

@InputType()
export class ReportsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  report?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sign?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tag?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  validated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  validated_sign?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  maintance_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => ReportsCountOrderByAggregateInput, { nullable: true })
  _count?: ReportsCountOrderByAggregateInput;

  @Field(() => ReportsAvgOrderByAggregateInput, { nullable: true })
  _avg?: ReportsAvgOrderByAggregateInput;

  @Field(() => ReportsMaxOrderByAggregateInput, { nullable: true })
  _max?: ReportsMaxOrderByAggregateInput;

  @Field(() => ReportsMinOrderByAggregateInput, { nullable: true })
  _min?: ReportsMinOrderByAggregateInput;

  @Field(() => ReportsSumOrderByAggregateInput, { nullable: true })
  _sum?: ReportsSumOrderByAggregateInput;
}
