import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { catagoryOrderByWithRelationInput } from '../../common-dto/catagory/catagory-order-by-with-relation.input';
import { ReplacementsOrderByRelationAggregateInput } from '../../replacements/replacements/replacements-order-by-relation-aggregate.input';

@InputType()
export class ItemsOrderByWithRelationInput {
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

  @Field(() => catagoryOrderByWithRelationInput, { nullable: true })
  catagory?: catagoryOrderByWithRelationInput;

  @Field(() => ReplacementsOrderByRelationAggregateInput, { nullable: true })
  replacements?: ReplacementsOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;
}
