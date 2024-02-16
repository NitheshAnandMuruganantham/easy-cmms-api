import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoice_itemsWhereUniqueInput } from '../../invoices/dto/invoice-items/invoice-items-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueinvoiceItemsOrThrowArgs {
  @Field(() => invoice_itemsWhereUniqueInput, { nullable: false })
  @Type(() => invoice_itemsWhereUniqueInput)
  where!: invoice_itemsWhereUniqueInput;
}
