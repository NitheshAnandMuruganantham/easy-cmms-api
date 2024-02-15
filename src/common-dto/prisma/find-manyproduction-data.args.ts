import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { production_dataWhereInput } from '../production-data/production-data-where.input';
import { Type } from 'class-transformer';
import { production_dataOrderByWithRelationAndSearchRelevanceInput } from '../production-data/production-data-order-by-with-relation-and-search-relevance.input';
import { production_dataWhereUniqueInput } from '../production-data/production-data-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Production_dataScalarFieldEnum } from './production-data-scalar-field.enum';

@ArgsType()
export class FindManyproductionDataArgs {
  @Field(() => production_dataWhereInput, { nullable: true })
  @Type(() => production_dataWhereInput)
  where?: production_dataWhereInput;

  @Field(() => [production_dataOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<production_dataOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => production_dataWhereUniqueInput, { nullable: true })
  cursor?: production_dataWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Production_dataScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Production_dataScalarFieldEnum>;
}
