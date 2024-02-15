import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { InvoicesCountOrderByAggregateInput } from './invoices-count-order-by-aggregate.input';
import { InvoicesAvgOrderByAggregateInput } from './invoices-avg-order-by-aggregate.input';
import { InvoicesMaxOrderByAggregateInput } from './invoices-max-order-by-aggregate.input';
import { InvoicesMinOrderByAggregateInput } from './invoices-min-order-by-aggregate.input';
import { InvoicesSumOrderByAggregateInput } from './invoices-sum-order-by-aggregate.input';

@InputType()
export class InvoicesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  total?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  invoice_date?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  number?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => InvoicesCountOrderByAggregateInput, { nullable: true })
  _count?: InvoicesCountOrderByAggregateInput;

  @Field(() => InvoicesAvgOrderByAggregateInput, { nullable: true })
  _avg?: InvoicesAvgOrderByAggregateInput;

  @Field(() => InvoicesMaxOrderByAggregateInput, { nullable: true })
  _max?: InvoicesMaxOrderByAggregateInput;

  @Field(() => InvoicesMinOrderByAggregateInput, { nullable: true })
  _min?: InvoicesMinOrderByAggregateInput;

  @Field(() => InvoicesSumOrderByAggregateInput, { nullable: true })
  _sum?: InvoicesSumOrderByAggregateInput;
}
