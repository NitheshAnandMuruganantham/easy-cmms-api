import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesCreateWithoutBlockInput } from './invoices-create-without-block.input';
import { Type } from 'class-transformer';
import { InvoicesCreateOrConnectWithoutBlockInput } from './invoices-create-or-connect-without-block.input';
import { InvoicesUpsertWithWhereUniqueWithoutBlockInput } from './invoices-upsert-with-where-unique-without-block.input';
import { InvoicesCreateManyBlockInputEnvelope } from './invoices-create-many-block-input-envelope.input';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';
import { InvoicesUpdateWithWhereUniqueWithoutBlockInput } from './invoices-update-with-where-unique-without-block.input';
import { InvoicesUpdateManyWithWhereWithoutBlockInput } from './invoices-update-many-with-where-without-block.input';
import { InvoicesScalarWhereInput } from './invoices-scalar-where.input';

@InputType()
export class InvoicesUpdateManyWithoutBlockNestedInput {
  @Field(() => [InvoicesCreateWithoutBlockInput], { nullable: true })
  @Type(() => InvoicesCreateWithoutBlockInput)
  create?: Array<InvoicesCreateWithoutBlockInput>;

  @Field(() => [InvoicesCreateOrConnectWithoutBlockInput], { nullable: true })
  @Type(() => InvoicesCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<InvoicesCreateOrConnectWithoutBlockInput>;

  @Field(() => [InvoicesUpsertWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => InvoicesUpsertWithWhereUniqueWithoutBlockInput)
  upsert?: Array<InvoicesUpsertWithWhereUniqueWithoutBlockInput>;

  @Field(() => InvoicesCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => InvoicesCreateManyBlockInputEnvelope)
  createMany?: InvoicesCreateManyBlockInputEnvelope;

  @Field(() => [InvoicesWhereUniqueInput], { nullable: true })
  @Type(() => InvoicesWhereUniqueInput)
  set?: Array<InvoicesWhereUniqueInput>;

  @Field(() => [InvoicesWhereUniqueInput], { nullable: true })
  @Type(() => InvoicesWhereUniqueInput)
  disconnect?: Array<InvoicesWhereUniqueInput>;

  @Field(() => [InvoicesWhereUniqueInput], { nullable: true })
  @Type(() => InvoicesWhereUniqueInput)
  delete?: Array<InvoicesWhereUniqueInput>;

  @Field(() => [InvoicesWhereUniqueInput], { nullable: true })
  @Type(() => InvoicesWhereUniqueInput)
  connect?: Array<InvoicesWhereUniqueInput>;

  @Field(() => [InvoicesUpdateWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => InvoicesUpdateWithWhereUniqueWithoutBlockInput)
  update?: Array<InvoicesUpdateWithWhereUniqueWithoutBlockInput>;

  @Field(() => [InvoicesUpdateManyWithWhereWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => InvoicesUpdateManyWithWhereWithoutBlockInput)
  updateMany?: Array<InvoicesUpdateManyWithWhereWithoutBlockInput>;

  @Field(() => [InvoicesScalarWhereInput], { nullable: true })
  @Type(() => InvoicesScalarWhereInput)
  deleteMany?: Array<InvoicesScalarWhereInput>;
}
