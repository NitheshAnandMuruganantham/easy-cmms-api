import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SectionsCountOrderByAggregateInput } from './sections-count-order-by-aggregate.input';
import { SectionsAvgOrderByAggregateInput } from './sections-avg-order-by-aggregate.input';
import { SectionsMaxOrderByAggregateInput } from './sections-max-order-by-aggregate.input';
import { SectionsMinOrderByAggregateInput } from './sections-min-order-by-aggregate.input';
import { SectionsSumOrderByAggregateInput } from './sections-sum-order-by-aggregate.input';

@InputType()
export class SectionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SectionsCountOrderByAggregateInput, {nullable:true})
    _count?: SectionsCountOrderByAggregateInput;

    @Field(() => SectionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: SectionsAvgOrderByAggregateInput;

    @Field(() => SectionsMaxOrderByAggregateInput, {nullable:true})
    _max?: SectionsMaxOrderByAggregateInput;

    @Field(() => SectionsMinOrderByAggregateInput, {nullable:true})
    _min?: SectionsMinOrderByAggregateInput;

    @Field(() => SectionsSumOrderByAggregateInput, {nullable:true})
    _sum?: SectionsSumOrderByAggregateInput;
}
