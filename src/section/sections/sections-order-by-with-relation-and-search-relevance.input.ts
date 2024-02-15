import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { MachinesOrderByRelationAggregateInput } from '../../machines/machines/machines-order-by-relation-aggregate.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../block/block/block-order-by-with-relation-and-search-relevance.input';
import { SectionsOrderByRelevanceInput } from './sections-order-by-relevance.input';

@InputType()
export class SectionsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => MachinesOrderByRelationAggregateInput, { nullable: true })
  machines?: MachinesOrderByRelationAggregateInput;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => SectionsOrderByRelevanceInput, { nullable: true })
  _relevance?: SectionsOrderByRelevanceInput;
}
