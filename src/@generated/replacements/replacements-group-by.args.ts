import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplacementsWhereInput } from './replacements-where.input';
import { Type } from 'class-transformer';
import { ReplacementsOrderByWithAggregationInput } from './replacements-order-by-with-aggregation.input';
import { ReplacementsScalarFieldEnum } from './replacements-scalar-field.enum';
import { ReplacementsScalarWhereWithAggregatesInput } from './replacements-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReplacementsCountAggregateInput } from './replacements-count-aggregate.input';
import { ReplacementsAvgAggregateInput } from './replacements-avg-aggregate.input';
import { ReplacementsSumAggregateInput } from './replacements-sum-aggregate.input';
import { ReplacementsMinAggregateInput } from './replacements-min-aggregate.input';
import { ReplacementsMaxAggregateInput } from './replacements-max-aggregate.input';

@ArgsType()
export class ReplacementsGroupByArgs {

    @Field(() => ReplacementsWhereInput, {nullable:true})
    @Type(() => ReplacementsWhereInput)
    where?: ReplacementsWhereInput;

    @Field(() => [ReplacementsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReplacementsOrderByWithAggregationInput>;

    @Field(() => [ReplacementsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReplacementsScalarFieldEnum>;

    @Field(() => ReplacementsScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReplacementsScalarWhereWithAggregatesInput;

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
