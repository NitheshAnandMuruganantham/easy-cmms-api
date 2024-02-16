import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceOrderByRelevanceFieldEnum } from './maintenance-order-by-relevance-field.enum';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';

@InputType()
export class MaintenanceOrderByRelevanceInput {
  @Field(() => [MaintenanceOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof MaintenanceOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
