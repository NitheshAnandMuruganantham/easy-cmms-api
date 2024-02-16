import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ItemsOrderByRelationAggregateInput } from '../items/items-order-by-relation-aggregate.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../block/dto/block/block-order-by-with-relation-and-search-relevance.input';
import { catagoryOrderByRelevanceInput } from './catagory-order-by-relevance.input';

@InputType()
export class catagoryOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => ItemsOrderByRelationAggregateInput, { nullable: true })
  items?: ItemsOrderByRelationAggregateInput;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => catagoryOrderByRelevanceInput, { nullable: true })
  _relevance?: catagoryOrderByRelevanceInput;
}
