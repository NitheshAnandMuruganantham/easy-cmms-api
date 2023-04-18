import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class routine_maintanancesScalarWhereWithAggregatesInput {

    @Field(() => [routine_maintanancesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<routine_maintanancesScalarWhereWithAggregatesInput>;

    @Field(() => [routine_maintanancesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<routine_maintanancesScalarWhereWithAggregatesInput>;

    @Field(() => [routine_maintanancesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<routine_maintanancesScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cron?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    duration?: IntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    assignee_id?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    meachine_id?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @HideField()
    block_id?: BigIntWithAggregatesFilter;
}
