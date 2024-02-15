import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { TicketCountOrderByAggregateInput } from './ticket-count-order-by-aggregate.input';
import { TicketAvgOrderByAggregateInput } from './ticket-avg-order-by-aggregate.input';
import { TicketMaxOrderByAggregateInput } from './ticket-max-order-by-aggregate.input';
import { TicketMinOrderByAggregateInput } from './ticket-min-order-by-aggregate.input';
import { TicketSumOrderByAggregateInput } from './ticket-sum-order-by-aggregate.input';

@InputType()
export class TicketOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  photos?: keyof typeof SortOrder;

  @HideField()
  user_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  maintenance_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  machine_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => TicketCountOrderByAggregateInput, { nullable: true })
  _count?: TicketCountOrderByAggregateInput;

  @Field(() => TicketAvgOrderByAggregateInput, { nullable: true })
  _avg?: TicketAvgOrderByAggregateInput;

  @Field(() => TicketMaxOrderByAggregateInput, { nullable: true })
  _max?: TicketMaxOrderByAggregateInput;

  @Field(() => TicketMinOrderByAggregateInput, { nullable: true })
  _min?: TicketMinOrderByAggregateInput;

  @Field(() => TicketSumOrderByAggregateInput, { nullable: true })
  _sum?: TicketSumOrderByAggregateInput;
}
