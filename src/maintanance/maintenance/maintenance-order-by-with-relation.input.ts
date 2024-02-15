import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { UsersOrderByWithRelationInput } from '../../users/users/users-order-by-with-relation.input';
import { MachinesOrderByWithRelationInput } from '../../machines/machines/machines-order-by-with-relation.input';
import { ReplacementsOrderByRelationAggregateInput } from '../../replacements/replacements/replacements-order-by-relation-aggregate.input';
import { ReportsOrderByRelationAggregateInput } from '../../report/reports/reports-order-by-relation-aggregate.input';
import { TicketOrderByWithRelationInput } from '../../ticket/ticket/ticket-order-by-with-relation.input';

@InputType()
export class MaintenanceOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

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

  @Field(() => UsersOrderByWithRelationInput, { nullable: true })
  assignee?: UsersOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  machine_id?: keyof typeof SortOrder;

  @Field(() => MachinesOrderByWithRelationInput, { nullable: true })
  machines?: MachinesOrderByWithRelationInput;

  @Field(() => ReplacementsOrderByRelationAggregateInput, { nullable: true })
  replacements?: ReplacementsOrderByRelationAggregateInput;

  @Field(() => ReportsOrderByRelationAggregateInput, { nullable: true })
  reports?: ReportsOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => TicketOrderByWithRelationInput, { nullable: true })
  ticket?: TicketOrderByWithRelationInput;
}
