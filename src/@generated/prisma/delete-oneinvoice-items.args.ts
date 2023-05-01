import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoice_itemsWhereUniqueInput } from '../invoice-items/invoice-items-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneinvoiceItemsArgs {

    @Field(() => invoice_itemsWhereUniqueInput, {nullable:false})
    @Type(() => invoice_itemsWhereUniqueInput)
    where!: invoice_itemsWhereUniqueInput;
}
