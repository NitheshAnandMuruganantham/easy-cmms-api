import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutReportsInput } from './block-create-without-reports.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutReportsInput } from './block-create-or-connect-without-reports.input';
import { BlockUpsertWithoutReportsInput } from './block-upsert-without-reports.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutReportsInput } from './block-update-without-reports.input';

@InputType()
export class BlockUpdateOneRequiredWithoutReportsNestedInput {
  @Field(() => BlockCreateWithoutReportsInput, { nullable: true })
  @Type(() => BlockCreateWithoutReportsInput)
  create?: BlockCreateWithoutReportsInput;

  @Field(() => BlockCreateOrConnectWithoutReportsInput, { nullable: true })
  @Type(() => BlockCreateOrConnectWithoutReportsInput)
  connectOrCreate?: BlockCreateOrConnectWithoutReportsInput;

  @Field(() => BlockUpsertWithoutReportsInput, { nullable: true })
  @Type(() => BlockUpsertWithoutReportsInput)
  upsert?: BlockUpsertWithoutReportsInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;

  @Field(() => BlockUpdateWithoutReportsInput, { nullable: true })
  @Type(() => BlockUpdateWithoutReportsInput)
  update?: BlockUpdateWithoutReportsInput;
}
