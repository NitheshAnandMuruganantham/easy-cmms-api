import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoice_itemsCreateInput } from '../invoice-items/invoice-items-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneinvoiceItemsArgs {

    @Field(() => invoice_itemsCreateInput, {nullable:false})
    @Type(() => invoice_itemsCreateInput)
    data!: invoice_itemsCreateInput;
}
