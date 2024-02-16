import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { UsersOrderByWithRelationAndSearchRelevanceInput } from '../../users/dto/users-order-by-with-relation-and-search-relevance.input';
import { MachinesOrderByWithRelationAndSearchRelevanceInput } from '../../machines/dto/machines/machines-order-by-with-relation-and-search-relevance.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../block/dto/block/block-order-by-with-relation-and-search-relevance.input';
import { routine_maintanancesOrderByRelevanceInput } from './routine-maintanances-order-by-relevance.input';

@InputType()
export class routine_maintanancesOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cron?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  duration?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  assignee_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  meachine_id?: keyof typeof SortOrder;

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
  meachine?: MachinesOrderByWithRelationAndSearchRelevanceInput;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => routine_maintanancesOrderByRelevanceInput, { nullable: true })
  _relevance?: routine_maintanancesOrderByRelevanceInput;
}
