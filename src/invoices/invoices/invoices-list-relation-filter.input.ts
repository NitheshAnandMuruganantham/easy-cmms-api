import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesWhereInput } from './invoices-where.input';

@InputType()
export class InvoicesListRelationFilter {
  @Field(() => InvoicesWhereInput, { nullable: true })
  every?: InvoicesWhereInput;

  @Field(() => InvoicesWhereInput, { nullable: true })
  some?: InvoicesWhereInput;

  @Field(() => InvoicesWhereInput, { nullable: true })
  none?: InvoicesWhereInput;
}
