import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsOrderByRelevanceFieldEnum } from './reports-order-by-relevance-field.enum';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';

@InputType()
export class ReportsOrderByRelevanceInput {
  @Field(() => [ReportsOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof ReportsOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
