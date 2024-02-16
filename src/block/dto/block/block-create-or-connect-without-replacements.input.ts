import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutReplacementsInput } from './block-create-without-replacements.input';

@InputType()
export class BlockCreateOrConnectWithoutReplacementsInput {
  @Field(() => BlockWhereUniqueInput, { nullable: false })
  @Type(() => BlockWhereUniqueInput)
  where!: BlockWhereUniqueInput;

  @Field(() => BlockCreateWithoutReplacementsInput, { nullable: false })
  @Type(() => BlockCreateWithoutReplacementsInput)
  create!: BlockCreateWithoutReplacementsInput;
}
