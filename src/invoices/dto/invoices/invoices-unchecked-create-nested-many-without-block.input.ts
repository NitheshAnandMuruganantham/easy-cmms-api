import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesCreateWithoutBlockInput } from './invoices-create-without-block.input';
import { Type } from 'class-transformer';
import { InvoicesCreateOrConnectWithoutBlockInput } from './invoices-create-or-connect-without-block.input';
import { InvoicesCreateManyBlockInputEnvelope } from './invoices-create-many-block-input-envelope.input';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';

@InputType()
export class InvoicesUncheckedCreateNestedManyWithoutBlockInput {
  @Field(() => [InvoicesCreateWithoutBlockInput], { nullable: true })
  @Type(() => InvoicesCreateWithoutBlockInput)
  create?: Array<InvoicesCreateWithoutBlockInput>;

  @Field(() => [InvoicesCreateOrConnectWithoutBlockInput], { nullable: true })
  @Type(() => InvoicesCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<InvoicesCreateOrConnectWithoutBlockInput>;

  @Field(() => InvoicesCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => InvoicesCreateManyBlockInputEnvelope)
  createMany?: InvoicesCreateManyBlockInputEnvelope;

  @Field(() => [InvoicesWhereUniqueInput], { nullable: true })
  @Type(() => InvoicesWhereUniqueInput)
  connect?: Array<InvoicesWhereUniqueInput>;
}
