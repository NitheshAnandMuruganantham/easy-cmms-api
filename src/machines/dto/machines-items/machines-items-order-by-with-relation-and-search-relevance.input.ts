import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { MachinesOrderByWithRelationAndSearchRelevanceInput } from '../machines/machines-order-by-with-relation-and-search-relevance.input';
import { ItemsOrderByWithRelationAndSearchRelevanceInput } from '../../../items/items/items-order-by-with-relation-and-search-relevance.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../../block/dto/block/block-order-by-with-relation-and-search-relevance.input';

@InputType()
export class machines_itemsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  machine_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item_id?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => MachinesOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  machine?: MachinesOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => ItemsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  items?: ItemsOrderByWithRelationAndSearchRelevanceInput;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;
}
