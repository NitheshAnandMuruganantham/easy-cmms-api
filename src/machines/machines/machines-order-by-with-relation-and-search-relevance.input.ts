import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../block/block/block-order-by-with-relation-and-search-relevance.input';
import { SectionsOrderByWithRelationAndSearchRelevanceInput } from '../../section/sections/sections-order-by-with-relation-and-search-relevance.input';
import { MaintenanceOrderByRelationAggregateInput } from '../../maintanance/maintenance/maintenance-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../../ticket/ticket/ticket-order-by-relation-aggregate.input';
import { machine_catagoryOrderByWithRelationAndSearchRelevanceInput } from '../../machine_catagory/machine-catagory/machine-catagory-order-by-with-relation-and-search-relevance.input';
import { routine_maintanancesOrderByRelationAggregateInput } from '../../routine-maintanances/routine-maintanances/routine-maintanances-order-by-relation-aggregate.input';
import { MachinesOrderByRelevanceInput } from './machines-order-by-relevance.input';

@InputType()
export class MachinesOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  section_id?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  label?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  profile?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  priority?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  machine_catagory_id?: keyof typeof SortOrder;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => SectionsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  section?: SectionsOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => MaintenanceOrderByRelationAggregateInput, { nullable: true })
  maintenance?: MaintenanceOrderByRelationAggregateInput;

  @Field(() => TicketOrderByRelationAggregateInput, { nullable: true })
  Ticket?: TicketOrderByRelationAggregateInput;

  @Field(() => machine_catagoryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  machine_catagory?: machine_catagoryOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => routine_maintanancesOrderByRelationAggregateInput, {
    nullable: true,
  })
  routine_maintanances?: routine_maintanancesOrderByRelationAggregateInput;

  @Field(() => MachinesOrderByRelevanceInput, { nullable: true })
  _relevance?: MachinesOrderByRelevanceInput;
}
