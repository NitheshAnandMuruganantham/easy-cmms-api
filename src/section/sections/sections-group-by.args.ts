import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionsWhereInput } from './sections-where.input';
import { Type } from 'class-transformer';
import { SectionsOrderByWithAggregationInput } from './sections-order-by-with-aggregation.input';
import { SectionsScalarFieldEnum } from './sections-scalar-field.enum';
import { SectionsScalarWhereWithAggregatesInput } from './sections-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SectionsCountAggregateInput } from './sections-count-aggregate.input';
import { SectionsAvgAggregateInput } from './sections-avg-aggregate.input';
import { SectionsSumAggregateInput } from './sections-sum-aggregate.input';
import { SectionsMinAggregateInput } from './sections-min-aggregate.input';
import { SectionsMaxAggregateInput } from './sections-max-aggregate.input';

@ArgsType()
export class SectionsGroupByArgs {

    @Field(() => SectionsWhereInput, {nullable:true})
    @Type(() => SectionsWhereInput)
    where?: SectionsWhereInput;

    @Field(() => [SectionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SectionsOrderByWithAggregationInput>;

    @Field(() => [SectionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SectionsScalarFieldEnum>;

    @Field(() => SectionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: SectionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SectionsCountAggregateInput, {nullable:true})
    _count?: SectionsCountAggregateInput;

    @Field(() => SectionsAvgAggregateInput, {nullable:true})
    _avg?: SectionsAvgAggregateInput;

    @Field(() => SectionsSumAggregateInput, {nullable:true})
    _sum?: SectionsSumAggregateInput;

    @Field(() => SectionsMinAggregateInput, {nullable:true})
    _min?: SectionsMinAggregateInput;

    @Field(() => SectionsMaxAggregateInput, {nullable:true})
    _max?: SectionsMaxAggregateInput;
}
