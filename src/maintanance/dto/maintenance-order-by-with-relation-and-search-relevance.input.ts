import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { UsersOrderByWithRelationAndSearchRelevanceInput } from '../../users/dto/users-order-by-with-relation-and-search-relevance.input';
import { MachinesOrderByWithRelationAndSearchRelevanceInput } from '../../machines/dto/machines/machines-order-by-with-relation-and-search-relevance.input';
import { ReplacementsOrderByRelationAggregateInput } from '../../replacements/dto/replacements-order-by-relation-aggregate.input';
import { ReportsOrderByRelationAggregateInput } from '../../report/dto/reports-order-by-relation-aggregate.input';
import { TicketOrderByWithRelationAndSearchRelevanceInput } from '../../ticket/dto/ticket-order-by-with-relation-and-search-relevance.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../block/dto/block/block-order-by-with-relation-and-search-relevance.input';
import { MaintenanceOrderByRelevanceInput } from './maintenance-order-by-relevance.input';

@InputType()
export class MaintenanceOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  photo?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  from?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  to?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  resolved?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  metadata?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  un_planned?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  elapsed?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  assignee_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  machine_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => UsersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  assignee?: UsersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => MachinesOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  machines?: MachinesOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => ReplacementsOrderByRelationAggregateInput, { nullable: true })
  replacements?: ReplacementsOrderByRelationAggregateInput;

  @Field(() => ReportsOrderByRelationAggregateInput, { nullable: true })
  reports?: ReportsOrderByRelationAggregateInput;

  @Field(() => TicketOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  ticket?: TicketOrderByWithRelationAndSearchRelevanceInput;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => MaintenanceOrderByRelevanceInput, { nullable: true })
  _relevance?: MaintenanceOrderByRelevanceInput;
}
