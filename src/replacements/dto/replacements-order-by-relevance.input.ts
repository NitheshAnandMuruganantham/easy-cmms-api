import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsOrderByRelevanceFieldEnum } from './replacements-order-by-relevance-field.enum';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';

@InputType()
export class ReplacementsOrderByRelevanceInput {
  @Field(() => [ReplacementsOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof ReplacementsOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
