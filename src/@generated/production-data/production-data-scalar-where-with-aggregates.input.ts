import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { Type } from 'class-transformer';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class production_dataScalarWhereWithAggregatesInput {

    @Field(() => [production_dataScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<production_dataScalarWhereWithAggregatesInput>;

    @Field(() => [production_dataScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<production_dataScalarWhereWithAggregatesInput>;

    @Field(() => [production_dataScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<production_dataScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    @Type(() => JsonWithAggregatesFilter)
    data?: JsonWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    from?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    to?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    updated_by?: BigIntWithAggregatesFilter;
}
