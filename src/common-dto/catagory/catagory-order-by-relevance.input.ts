import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryOrderByRelevanceFieldEnum } from './catagory-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class catagoryOrderByRelevanceInput {
  @Field(() => [catagoryOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof catagoryOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
