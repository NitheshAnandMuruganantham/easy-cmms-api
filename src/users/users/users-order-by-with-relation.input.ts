import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { MaintenanceOrderByRelationAggregateInput } from '../../maintanance/maintenance/maintenance-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../../ticket/ticket/ticket-order-by-relation-aggregate.input';

@InputType()
export class UsersOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  profile?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  phone?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_auth_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => MaintenanceOrderByRelationAggregateInput, { nullable: true })
  maintenance?: MaintenanceOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;

  @Field(() => TicketOrderByRelationAggregateInput, { nullable: true })
  ticket?: TicketOrderByRelationAggregateInput;
}
