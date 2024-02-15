import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlockWhereInput } from './block-where.input';
import { Type } from 'class-transformer';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from './block-order-by-with-relation-and-search-relevance.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlockCountAggregateInput } from './block-count-aggregate.input';
import { BlockAvgAggregateInput } from './block-avg-aggregate.input';
import { BlockSumAggregateInput } from './block-sum-aggregate.input';
import { BlockMinAggregateInput } from './block-min-aggregate.input';
import { BlockMaxAggregateInput } from './block-max-aggregate.input';

@ArgsType()
export class BlockAggregateArgs {
  @Field(() => BlockWhereInput, { nullable: true })
  @Type(() => BlockWhereInput)
  where?: BlockWhereInput;

  @Field(() => [BlockOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<BlockOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  cursor?: BlockWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => BlockCountAggregateInput, { nullable: true })
  _count?: BlockCountAggregateInput;

  @Field(() => BlockAvgAggregateInput, { nullable: true })
  _avg?: BlockAvgAggregateInput;

  @Field(() => BlockSumAggregateInput, { nullable: true })
  _sum?: BlockSumAggregateInput;

  @Field(() => BlockMinAggregateInput, { nullable: true })
  _min?: BlockMinAggregateInput;

  @Field(() => BlockMaxAggregateInput, { nullable: true })
  _max?: BlockMaxAggregateInput;
}
