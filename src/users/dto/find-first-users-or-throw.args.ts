import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { UsersOrderByWithRelationAndSearchRelevanceInput } from './users-order-by-with-relation-and-search-relevance.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsersScalarFieldEnum } from './users-scalar-field.enum';

@ArgsType()
export class FindFirstUsersOrThrowArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: UsersWhereInput;

  @Field(() => [UsersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<UsersOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: UsersWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}
