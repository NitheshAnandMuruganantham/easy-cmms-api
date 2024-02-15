import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplacementsWhereInput } from './replacements-where.input';
import { Type } from 'class-transformer';
import { ReplacementsOrderByWithRelationAndSearchRelevanceInput } from './replacements-order-by-with-relation-and-search-relevance.input';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReplacementsCountAggregateInput } from './replacements-count-aggregate.input';
import { ReplacementsAvgAggregateInput } from './replacements-avg-aggregate.input';
import { ReplacementsSumAggregateInput } from './replacements-sum-aggregate.input';
import { ReplacementsMinAggregateInput } from './replacements-min-aggregate.input';
import { ReplacementsMaxAggregateInput } from './replacements-max-aggregate.input';

@ArgsType()
export class ReplacementsAggregateArgs {

    @Field(() => ReplacementsWhereInput, {nullable:true})
    @Type(() => ReplacementsWhereInput)
    where?: ReplacementsWhereInput;

    @Field(() => [ReplacementsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ReplacementsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ReplacementsWhereUniqueInput, {nullable:true})
    cursor?: ReplacementsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReplacementsCountAggregateInput, {nullable:true})
    _count?: ReplacementsCountAggregateInput;

    @Field(() => ReplacementsAvgAggregateInput, {nullable:true})
    _avg?: ReplacementsAvgAggregateInput;

    @Field(() => ReplacementsSumAggregateInput, {nullable:true})
    _sum?: ReplacementsSumAggregateInput;

    @Field(() => ReplacementsMinAggregateInput, {nullable:true})
    _min?: ReplacementsMinAggregateInput;

    @Field(() => ReplacementsMaxAggregateInput, {nullable:true})
    _max?: ReplacementsMaxAggregateInput;
}
