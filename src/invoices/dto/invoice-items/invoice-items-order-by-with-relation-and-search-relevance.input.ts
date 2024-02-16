import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { InvoicesOrderByWithRelationAndSearchRelevanceInput } from '../invoices/invoices-order-by-with-relation-and-search-relevance.input';
import { ItemsOrderByWithRelationAndSearchRelevanceInput } from '../../../items/items/items-order-by-with-relation-and-search-relevance.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../../block/dto/block/block-order-by-with-relation-and-search-relevance.input';

@InputType()
export class invoice_itemsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  invoice_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  unit_price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  quantity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item_id?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => InvoicesOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  invoice?: InvoicesOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => ItemsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  item?: ItemsOrderByWithRelationAndSearchRelevanceInput;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;
}
