import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../../common-dto/prisma/sort-order.enum';
import { BlockOrderByWithRelationInput } from '../../../block/dto/block/block-order-by-with-relation.input';
import { SectionsOrderByWithRelationInput } from '../../../section/dto/sections/sections-order-by-with-relation.input';
import { MaintenanceOrderByRelationAggregateInput } from '../../../maintanance/dto/maintenance-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../../../ticket/dto/ticket-order-by-relation-aggregate.input';

@InputType()
export class MachinesOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  section_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  block_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  label?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  profile?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  priority?: keyof typeof SortOrder;

  @Field(() => BlockOrderByWithRelationInput, { nullable: true })
  block?: BlockOrderByWithRelationInput;

  @Field(() => SectionsOrderByWithRelationInput, { nullable: true })
  section?: SectionsOrderByWithRelationInput;

  @Field(() => MaintenanceOrderByRelationAggregateInput, { nullable: true })
  maintenance?: MaintenanceOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => TicketOrderByRelationAggregateInput, { nullable: true })
  Ticket?: TicketOrderByRelationAggregateInput;
}
