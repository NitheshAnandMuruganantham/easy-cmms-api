import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machines_itemsSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  machine_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item_id?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;
}
