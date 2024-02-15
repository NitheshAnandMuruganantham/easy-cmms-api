import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { catagoryWhereInput } from './catagory-where.input';
import { Type } from 'class-transformer';
import { catagoryOrderByWithRelationAndSearchRelevanceInput } from './catagory-order-by-with-relation-and-search-relevance.input';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CatagoryScalarFieldEnum } from '../prisma/catagory-scalar-field.enum';

@ArgsType()
export class FindFirstcatagoryArgs {
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

  @Field(() => [CatagoryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CatagoryScalarFieldEnum>;
}
