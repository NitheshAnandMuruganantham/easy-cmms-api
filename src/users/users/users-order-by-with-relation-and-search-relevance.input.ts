import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../block/block/block-order-by-with-relation-and-search-relevance.input';
import { MaintenanceOrderByRelationAggregateInput } from '../../maintanance/maintenance/maintenance-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../../ticket/ticket/ticket-order-by-relation-aggregate.input';
import { routine_maintanancesOrderByRelationAggregateInput } from '../../routine-maintanances/routine-maintanances/routine-maintanances-order-by-relation-aggregate.input';
import { UsersOrderByRelevanceInput } from './users-order-by-relevance.input';

@InputType()
export class UsersOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  profile?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  phone?: keyof typeof SortOrder;

  @HideField()
  user_auth_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @HideField()
  blockId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  extra_roles?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role_alias?: keyof typeof SortOrder;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => MaintenanceOrderByRelationAggregateInput, { nullable: true })
  maintenance?: MaintenanceOrderByRelationAggregateInput;

  @Field(() => TicketOrderByRelationAggregateInput, { nullable: true })
  ticket?: TicketOrderByRelationAggregateInput;

  @Field(() => routine_maintanancesOrderByRelationAggregateInput, {
    nullable: true,
  })
  routine_maintanances?: routine_maintanancesOrderByRelationAggregateInput;

  @Field(() => UsersOrderByRelevanceInput, { nullable: true })
  _relevance?: UsersOrderByRelevanceInput;
}
