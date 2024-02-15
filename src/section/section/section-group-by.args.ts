import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionWhereInput } from './section-where.input';
import { Type } from 'class-transformer';
import { SectionOrderByWithAggregationInput } from './section-order-by-with-aggregation.input';
import { SectionScalarFieldEnum } from './section-scalar-field.enum';
import { SectionScalarWhereWithAggregatesInput } from './section-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SectionCountAggregateInput } from './section-count-aggregate.input';
import { SectionAvgAggregateInput } from './section-avg-aggregate.input';
import { SectionSumAggregateInput } from './section-sum-aggregate.input';
import { SectionMinAggregateInput } from './section-min-aggregate.input';
import { SectionMaxAggregateInput } from './section-max-aggregate.input';

@ArgsType()
export class SectionGroupByArgs {

    @Field(() => SectionWhereInput, {nullable:true})
    @Type(() => SectionWhereInput)
    where?: SectionWhereInput;

    @Field(() => [SectionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SectionOrderByWithAggregationInput>;

    @Field(() => [SectionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SectionScalarFieldEnum>;

    @Field(() => SectionScalarWhereWithAggregatesInput, {nullable:true})
    having?: SectionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SectionCountAggregateInput, {nullable:true})
    _count?: SectionCountAggregateInput;

    @Field(() => SectionAvgAggregateInput, {nullable:true})
    _avg?: SectionAvgAggregateInput;

    @Field(() => SectionSumAggregateInput, {nullable:true})
    _sum?: SectionSumAggregateInput;

    @Field(() => SectionMinAggregateInput, {nullable:true})
    _min?: SectionMinAggregateInput;

    @Field(() => SectionMaxAggregateInput, {nullable:true})
    _max?: SectionMaxAggregateInput;
}
