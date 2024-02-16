import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionWhereInput } from './section-where.input';
import { Type } from 'class-transformer';
import { SectionOrderByWithRelationInput } from './section-order-by-with-relation.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SectionCountAggregateInput } from './section-count-aggregate.input';
import { SectionAvgAggregateInput } from './section-avg-aggregate.input';
import { SectionSumAggregateInput } from './section-sum-aggregate.input';
import { SectionMinAggregateInput } from './section-min-aggregate.input';
import { SectionMaxAggregateInput } from './section-max-aggregate.input';

@ArgsType()
export class SectionAggregateArgs {
  @Field(() => SectionWhereInput, { nullable: true })
  @Type(() => SectionWhereInput)
  where?: SectionWhereInput;

  @Field(() => [SectionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SectionOrderByWithRelationInput>;

  @Field(() => SectionWhereUniqueInput, { nullable: true })
  cursor?: SectionWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => SectionCountAggregateInput, { nullable: true })
  _count?: SectionCountAggregateInput;

  @Field(() => SectionAvgAggregateInput, { nullable: true })
  _avg?: SectionAvgAggregateInput;

  @Field(() => SectionSumAggregateInput, { nullable: true })
  _sum?: SectionSumAggregateInput;

  @Field(() => SectionMinAggregateInput, { nullable: true })
  _min?: SectionMinAggregateInput;

  @Field(() => SectionMaxAggregateInput, { nullable: true })
  _max?: SectionMaxAggregateInput;
}
