import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesScalarWhereInput } from './invoices-scalar-where.input';
import { Type } from 'class-transformer';
import { InvoicesUpdateManyMutationInput } from './invoices-update-many-mutation.input';

@InputType()
export class InvoicesUpdateManyWithWhereWithoutBlockInput {
  @Field(() => InvoicesScalarWhereInput, { nullable: false })
  @Type(() => InvoicesScalarWhereInput)
  where!: InvoicesScalarWhereInput;

  @Field(() => InvoicesUpdateManyMutationInput, { nullable: false })
  @Type(() => InvoicesUpdateManyMutationInput)
  data!: InvoicesUpdateManyMutationInput;
}
