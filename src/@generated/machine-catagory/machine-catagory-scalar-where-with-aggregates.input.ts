import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class machine_catagoryScalarWhereWithAggregatesInput {

    @Field(() => [machine_catagoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<machine_catagoryScalarWhereWithAggregatesInput>;

    @Field(() => [machine_catagoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<machine_catagoryScalarWhereWithAggregatesInput>;

    @Field(() => [machine_catagoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<machine_catagoryScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
