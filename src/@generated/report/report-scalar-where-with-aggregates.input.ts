import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReportScalarWhereWithAggregatesInput {

    @Field(() => [ReportScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReportScalarWhereWithAggregatesInput>;

    @Field(() => [ReportScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReportScalarWhereWithAggregatesInput>;

    @Field(() => [ReportScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReportScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sign?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    tag?: JsonWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    validated?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    validated_sign?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    maintance_id?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
