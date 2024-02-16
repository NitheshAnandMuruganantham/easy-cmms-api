import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { MaintenanceOrderByWithRelationAndSearchRelevanceInput } from '../../maintanance/dto/maintenance-order-by-with-relation-and-search-relevance.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../../block/dto/block/block-order-by-with-relation-and-search-relevance.input';
import { ReportsOrderByRelevanceInput } from './reports-order-by-relevance.input';

@InputType()
export class ReportsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  report?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sign?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tag?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  validated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  validated_sign?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  maintance_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => MaintenanceOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  maintenance?: MaintenanceOrderByWithRelationAndSearchRelevanceInput;

  @HideField()
  block?: BlockOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => ReportsOrderByRelevanceInput, { nullable: true })
  _relevance?: ReportsOrderByRelevanceInput;
}
