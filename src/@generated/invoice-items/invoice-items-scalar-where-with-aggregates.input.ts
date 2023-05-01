import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class invoice_itemsScalarWhereWithAggregatesInput {

    @Field(() => [invoice_itemsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<invoice_itemsScalarWhereWithAggregatesInput>;

    @Field(() => [invoice_itemsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<invoice_itemsScalarWhereWithAggregatesInput>;

    @Field(() => [invoice_itemsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<invoice_itemsScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    invoice_id?: BigIntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    unit_price?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    quantity?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    item_id?: BigIntWithAggregatesFilter;

    @HideField()
    block_id?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
