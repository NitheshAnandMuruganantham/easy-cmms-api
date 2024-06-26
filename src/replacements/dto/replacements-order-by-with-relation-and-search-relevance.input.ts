import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ItemsOrderByWithRelationAndSearchRelevanceInput } from '../../items/items/items-order-by-with-relation-and-search-relevance.input';
import { MaintenanceOrderByWithRelationAndSearchRelevanceInput } from '../../maintanance/dto/maintenance-order-by-with-relation-and-search-relevance.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../block/dto/block/block-order-by-with-relation-and-search-relevance.input';
import { ReplacementsOrderByRelevanceInput } from './replacements-order-by-relevance.input';

@InputType()
export class ReplacementsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  quantity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  metadata?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  maintanance_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  approved?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => ItemsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  items?: ItemsOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => MaintenanceOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  maintenance?: MaintenanceOrderByWithRelationAndSearchRelevanceInput;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => ReplacementsOrderByRelevanceInput, { nullable: true })
  _relevance?: ReplacementsOrderByRelevanceInput;
}
