import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOrderByRelevanceFieldEnum } from './users-order-by-relevance-field.enum';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';

@InputType()
export class UsersOrderByRelevanceInput {
  @Field(() => [UsersOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof UsersOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
