import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoice_itemsUpdateInput } from '../invoice-items/invoice-items-update.input';
import { Type } from 'class-transformer';
import { invoice_itemsWhereUniqueInput } from '../invoice-items/invoice-items-where-unique.input';

@ArgsType()
export class UpdateOneinvoiceItemsArgs {

    @Field(() => invoice_itemsUpdateInput, {nullable:false})
    @Type(() => invoice_itemsUpdateInput)
    data!: invoice_itemsUpdateInput;

    @Field(() => invoice_itemsWhereUniqueInput, {nullable:false})
    @Type(() => invoice_itemsWhereUniqueInput)
    where!: invoice_itemsWhereUniqueInput;
}
