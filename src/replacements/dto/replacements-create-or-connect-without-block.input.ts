import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Type } from 'class-transformer';
import { ReplacementsCreateWithoutBlockInput } from './replacements-create-without-block.input';

@InputType()
export class ReplacementsCreateOrConnectWithoutBlockInput {
  @Field(() => ReplacementsWhereUniqueInput, { nullable: false })
  @Type(() => ReplacementsWhereUniqueInput)
  where!: ReplacementsWhereUniqueInput;

  @Field(() => ReplacementsCreateWithoutBlockInput, { nullable: false })
  @Type(() => ReplacementsCreateWithoutBlockInput)
  create!: ReplacementsCreateWithoutBlockInput;
}
