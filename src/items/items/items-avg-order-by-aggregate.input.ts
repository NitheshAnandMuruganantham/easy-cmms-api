import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ItemsAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  quantity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  unit_price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  catagory_id?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;
}
