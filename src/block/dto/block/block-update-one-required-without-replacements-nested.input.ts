import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutReplacementsInput } from './block-create-without-replacements.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutReplacementsInput } from './block-create-or-connect-without-replacements.input';
import { BlockUpsertWithoutReplacementsInput } from './block-upsert-without-replacements.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutReplacementsInput } from './block-update-without-replacements.input';

@InputType()
export class BlockUpdateOneRequiredWithoutReplacementsNestedInput {
  @Field(() => BlockCreateWithoutReplacementsInput, { nullable: true })
  @Type(() => BlockCreateWithoutReplacementsInput)
  create?: BlockCreateWithoutReplacementsInput;

  @Field(() => BlockCreateOrConnectWithoutReplacementsInput, { nullable: true })
  @Type(() => BlockCreateOrConnectWithoutReplacementsInput)
  connectOrCreate?: BlockCreateOrConnectWithoutReplacementsInput;

  @Field(() => BlockUpsertWithoutReplacementsInput, { nullable: true })
  @Type(() => BlockUpsertWithoutReplacementsInput)
  upsert?: BlockUpsertWithoutReplacementsInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;

  @Field(() => BlockUpdateWithoutReplacementsInput, { nullable: true })
  @Type(() => BlockUpdateWithoutReplacementsInput)
  update?: BlockUpdateWithoutReplacementsInput;
}
