import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoicesUpdateManyMutationInput } from './invoices-update-many-mutation.input';
import { Type } from 'class-transformer';
import { InvoicesWhereInput } from './invoices-where.input';

@ArgsType()
export class UpdateManyInvoicesArgs {
  @Field(() => InvoicesUpdateManyMutationInput, { nullable: false })
  @Type(() => InvoicesUpdateManyMutationInput)
  data!: InvoicesUpdateManyMutationInput;

  @Field(() => InvoicesWhereInput, { nullable: true })
  @Type(() => InvoicesWhereInput)
  where?: InvoicesWhereInput;
}
