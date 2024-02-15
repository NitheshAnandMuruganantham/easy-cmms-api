import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataOrderByRelevanceFieldEnum } from './production-data-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class production_dataOrderByRelevanceInput {
  @Field(() => [production_dataOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof production_dataOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
