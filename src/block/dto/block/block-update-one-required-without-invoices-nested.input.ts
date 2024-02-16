import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutInvoicesInput } from './block-create-without-invoices.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutInvoicesInput } from './block-create-or-connect-without-invoices.input';
import { BlockUpsertWithoutInvoicesInput } from './block-upsert-without-invoices.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutInvoicesInput } from './block-update-without-invoices.input';

@InputType()
export class BlockUpdateOneRequiredWithoutInvoicesNestedInput {
  @Field(() => BlockCreateWithoutInvoicesInput, { nullable: true })
  @Type(() => BlockCreateWithoutInvoicesInput)
  create?: BlockCreateWithoutInvoicesInput;

  @Field(() => BlockCreateOrConnectWithoutInvoicesInput, { nullable: true })
  @Type(() => BlockCreateOrConnectWithoutInvoicesInput)
  connectOrCreate?: BlockCreateOrConnectWithoutInvoicesInput;

  @Field(() => BlockUpsertWithoutInvoicesInput, { nullable: true })
  @Type(() => BlockUpsertWithoutInvoicesInput)
  upsert?: BlockUpsertWithoutInvoicesInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;

  @Field(() => BlockUpdateWithoutInvoicesInput, { nullable: true })
  @Type(() => BlockUpdateWithoutInvoicesInput)
  update?: BlockUpdateWithoutInvoicesInput;
}
