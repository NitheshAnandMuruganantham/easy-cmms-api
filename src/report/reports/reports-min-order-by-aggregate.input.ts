import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReportsMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  report?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sign?: keyof typeof SortOrder;

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
}
