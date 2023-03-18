import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class block_settingsScalarWhereWithAggregatesInput {

    @Field(() => [block_settingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<block_settingsScalarWhereWithAggregatesInput>;

    @Field(() => [block_settingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<block_settingsScalarWhereWithAggregatesInput>;

    @Field(() => [block_settingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<block_settingsScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    block_id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    value?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
