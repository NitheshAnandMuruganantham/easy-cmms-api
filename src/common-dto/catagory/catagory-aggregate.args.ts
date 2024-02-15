import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { catagoryWhereInput } from './catagory-where.input';
import { Type } from 'class-transformer';
import { catagoryOrderByWithRelationAndSearchRelevanceInput } from './catagory-order-by-with-relation-and-search-relevance.input';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class catagoryAggregateArgs {
  @Field(() => catagoryWhereInput, { nullable: true })
  @Type(() => catagoryWhereInput)
  where?: catagoryWhereInput;

  @Field(() => [catagoryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<catagoryOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => catagoryWhereUniqueInput, { nullable: true })
  cursor?: catagoryWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
