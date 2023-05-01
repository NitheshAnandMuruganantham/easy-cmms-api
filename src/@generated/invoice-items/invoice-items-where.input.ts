import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { InvoicesRelationFilter } from '../invoices/invoices-relation-filter.input';
import { ItemsRelationFilter } from '../items/items-relation-filter.input';
import { BlockRelationFilter } from '../block/block-relation-filter.input';

@InputType()
export class invoice_itemsWhereInput {

    @Field(() => [invoice_itemsWhereInput], {nullable:true})
    AND?: Array<invoice_itemsWhereInput>;

    @Field(() => [invoice_itemsWhereInput], {nullable:true})
    OR?: Array<invoice_itemsWhereInput>;

    @Field(() => [invoice_itemsWhereInput], {nullable:true})
    NOT?: Array<invoice_itemsWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    invoice_id?: BigIntFilter;

    @Field(() => FloatFilter, {nullable:true})
    unit_price?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    quantity?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => BigIntFilter, {nullable:true})
    item_id?: BigIntFilter;

    @HideField()
    block_id?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => InvoicesRelationFilter, {nullable:true})
    invoice?: InvoicesRelationFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    item?: ItemsRelationFilter;

    @HideField()
    block?: BlockRelationFilter;
}
