import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReportCountOrderByAggregateInput } from './report-count-order-by-aggregate.input';
import { ReportAvgOrderByAggregateInput } from './report-avg-order-by-aggregate.input';
import { ReportMaxOrderByAggregateInput } from './report-max-order-by-aggregate.input';
import { ReportMinOrderByAggregateInput } from './report-min-order-by-aggregate.input';
import { ReportSumOrderByAggregateInput } from './report-sum-order-by-aggregate.input';

@InputType()
export class ReportOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sign?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validated_sign?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maintance_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ReportCountOrderByAggregateInput, {nullable:true})
    _count?: ReportCountOrderByAggregateInput;

    @Field(() => ReportAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReportAvgOrderByAggregateInput;

    @Field(() => ReportMaxOrderByAggregateInput, {nullable:true})
    _max?: ReportMaxOrderByAggregateInput;

    @Field(() => ReportMinOrderByAggregateInput, {nullable:true})
    _min?: ReportMinOrderByAggregateInput;

    @Field(() => ReportSumOrderByAggregateInput, {nullable:true})
    _sum?: ReportSumOrderByAggregateInput;
}
