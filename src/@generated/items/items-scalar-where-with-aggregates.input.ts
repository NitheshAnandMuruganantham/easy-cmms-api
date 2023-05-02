import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ItemsScalarWhereWithAggregatesInput {

    @Field(() => [ItemsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemsScalarWhereWithAggregatesInput>;

    @Field(() => [ItemsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemsScalarWhereWithAggregatesInput>;

    @Field(() => [ItemsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemsScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    quantity?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    unit_price?: FloatWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    catagory_id?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @HideField()
    block_id?: BigIntWithAggregatesFilter;
}
