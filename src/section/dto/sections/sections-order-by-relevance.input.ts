import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsOrderByRelevanceFieldEnum } from './sections-order-by-relevance-field.enum';
import { SortOrder } from '../../../common-dto/prisma/sort-order.enum';

@InputType()
export class SectionsOrderByRelevanceInput {
  @Field(() => [SectionsOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof SectionsOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
