import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MachinesScalarWhereWithAggregatesInput {

    @Field(() => [MachinesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MachinesScalarWhereWithAggregatesInput>;

    @Field(() => [MachinesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MachinesScalarWhereWithAggregatesInput>;

    @Field(() => [MachinesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MachinesScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    section_id?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    block_id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    label?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    profile?: JsonWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    priority?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    machine_catagory_id?: BigIntWithAggregatesFilter;
}
