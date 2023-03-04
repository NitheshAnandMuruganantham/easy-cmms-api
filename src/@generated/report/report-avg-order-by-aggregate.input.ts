import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ReportAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validated_sign?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maintance_id?: keyof typeof SortOrder;
}
