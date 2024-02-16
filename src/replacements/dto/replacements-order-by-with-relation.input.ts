import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { ItemsOrderByWithRelationInput } from '../../items/items/items-order-by-with-relation.input';
import { MaintenanceOrderByWithRelationInput } from '../../maintanance/dto/maintenance-order-by-with-relation.input';

@InputType()
export class ReplacementsOrderByWithRelationInput {
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

  @Field(() => ItemsOrderByWithRelationInput, { nullable: true })
  items?: ItemsOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  maintanance_id?: keyof typeof SortOrder;

  @Field(() => MaintenanceOrderByWithRelationInput, { nullable: true })
  maintenance?: MaintenanceOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  approved?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;
}
