import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoicesUpdateInput } from './invoices-update.input';
import { Type } from 'class-transformer';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';

@ArgsType()
export class UpdateOneInvoicesArgs {
  @Field(() => InvoicesUpdateInput, { nullable: false })
  @Type(() => InvoicesUpdateInput)
  data!: InvoicesUpdateInput;

  @Field(() => InvoicesWhereUniqueInput, { nullable: false })
  @Type(() => InvoicesWhereUniqueInput)
  where!: InvoicesWhereUniqueInput;
}
