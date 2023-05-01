import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoice_itemsWhereInput } from '../invoice-items/invoice-items-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyinvoiceItemsArgs {

    @Field(() => invoice_itemsWhereInput, {nullable:true})
    @Type(() => invoice_itemsWhereInput)
    where?: invoice_itemsWhereInput;
}
