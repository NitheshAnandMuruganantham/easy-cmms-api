import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SectionsScalarWhereWithAggregatesInput {

    @Field(() => [SectionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SectionsScalarWhereWithAggregatesInput>;

    @Field(() => [SectionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SectionsScalarWhereWithAggregatesInput>;

    @Field(() => [SectionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SectionsScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @HideField()
    block_id?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
