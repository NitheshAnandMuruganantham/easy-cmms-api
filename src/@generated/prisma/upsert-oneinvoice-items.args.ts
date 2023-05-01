import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoice_itemsWhereUniqueInput } from '../invoice-items/invoice-items-where-unique.input';
import { Type } from 'class-transformer';
import { invoice_itemsCreateInput } from '../invoice-items/invoice-items-create.input';
import { invoice_itemsUpdateInput } from '../invoice-items/invoice-items-update.input';

@ArgsType()
export class UpsertOneinvoiceItemsArgs {

    @Field(() => invoice_itemsWhereUniqueInput, {nullable:false})
    @Type(() => invoice_itemsWhereUniqueInput)
    where!: invoice_itemsWhereUniqueInput;

    @Field(() => invoice_itemsCreateInput, {nullable:false})
    @Type(() => invoice_itemsCreateInput)
    create!: invoice_itemsCreateInput;

    @Field(() => invoice_itemsUpdateInput, {nullable:false})
    @Type(() => invoice_itemsUpdateInput)
    update!: invoice_itemsUpdateInput;
}
