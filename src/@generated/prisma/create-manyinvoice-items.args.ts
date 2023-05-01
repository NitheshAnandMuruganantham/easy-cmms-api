import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoice_itemsCreateManyInput } from '../invoice-items/invoice-items-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyinvoiceItemsArgs {

    @Field(() => [invoice_itemsCreateManyInput], {nullable:false})
    @Type(() => invoice_itemsCreateManyInput)
    data!: Array<invoice_itemsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
