import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { catagoryOrderByWithRelationAndSearchRelevanceInput } from '../catagory/catagory-order-by-with-relation-and-search-relevance.input';
import { ReplacementsOrderByRelationAggregateInput } from '../../replacements/dto/replacements-order-by-relation-aggregate.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../block/dto/block/block-order-by-with-relation-and-search-relevance.input';
import { invoice_itemsOrderByRelationAggregateInput } from '../../invoices/dto/invoice-items/invoice-items-order-by-relation-aggregate.input';
import { ItemsOrderByRelevanceInput } from './items-order-by-relevance.input';

@InputType()
export class ItemsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  quantity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  unit_price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  catagory_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => catagoryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  catagory?: catagoryOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => ReplacementsOrderByRelationAggregateInput, { nullable: true })
  replacements?: ReplacementsOrderByRelationAggregateInput;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => invoice_itemsOrderByRelationAggregateInput, { nullable: true })
  invoice_items?: invoice_itemsOrderByRelationAggregateInput;

  @Field(() => ItemsOrderByRelevanceInput, { nullable: true })
  _relevance?: ItemsOrderByRelevanceInput;
}
