import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoice_itemsUpdateManyMutationInput } from '../invoice-items/invoice-items-update-many-mutation.input';
import { Type } from 'class-transformer';
import { invoice_itemsWhereInput } from '../invoice-items/invoice-items-where.input';

@ArgsType()
export class UpdateManyinvoiceItemsArgs {

    @Field(() => invoice_itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => invoice_itemsUpdateManyMutationInput)
    data!: invoice_itemsUpdateManyMutationInput;

    @Field(() => invoice_itemsWhereInput, {nullable:true})
    @Type(() => invoice_itemsWhereInput)
    where?: invoice_itemsWhereInput;
}
