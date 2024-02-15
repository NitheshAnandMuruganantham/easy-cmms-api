import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { MaintenanceOrderByWithRelationInput } from '../../maintanance/maintenance/maintenance-order-by-with-relation.input';

@InputType()
export class ReportOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

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

  @Field(() => MaintenanceOrderByWithRelationInput, { nullable: true })
  maintenance?: MaintenanceOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;
}
