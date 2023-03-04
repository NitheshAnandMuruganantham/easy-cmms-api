import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportWhereInput } from './report-where.input';
import { Type } from 'class-transformer';
import { ReportOrderByWithAggregationInput } from './report-order-by-with-aggregation.input';
import { ReportScalarFieldEnum } from './report-scalar-field.enum';
import { ReportScalarWhereWithAggregatesInput } from './report-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReportCountAggregateInput } from './report-count-aggregate.input';
import { ReportAvgAggregateInput } from './report-avg-aggregate.input';
import { ReportSumAggregateInput } from './report-sum-aggregate.input';
import { ReportMinAggregateInput } from './report-min-aggregate.input';
import { ReportMaxAggregateInput } from './report-max-aggregate.input';

@ArgsType()
export class ReportGroupByArgs {

    @Field(() => ReportWhereInput, {nullable:true})
    @Type(() => ReportWhereInput)
    where?: ReportWhereInput;

    @Field(() => [ReportOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReportOrderByWithAggregationInput>;

    @Field(() => [ReportScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReportScalarFieldEnum>;

    @Field(() => ReportScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReportScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReportCountAggregateInput, {nullable:true})
    _count?: ReportCountAggregateInput;

    @Field(() => ReportAvgAggregateInput, {nullable:true})
    _avg?: ReportAvgAggregateInput;

    @Field(() => ReportSumAggregateInput, {nullable:true})
    _sum?: ReportSumAggregateInput;

    @Field(() => ReportMinAggregateInput, {nullable:true})
    _min?: ReportMinAggregateInput;

    @Field(() => ReportMaxAggregateInput, {nullable:true})
    _max?: ReportMaxAggregateInput;
}
