import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Type } from 'class-transformer';
import { ReplacementsUpdateWithoutBlockInput } from './replacements-update-without-block.input';
import { ReplacementsCreateWithoutBlockInput } from './replacements-create-without-block.input';

@InputType()
export class ReplacementsUpsertWithWhereUniqueWithoutBlockInput {
  @Field(() => ReplacementsWhereUniqueInput, { nullable: false })
  @Type(() => ReplacementsWhereUniqueInput)
  where!: ReplacementsWhereUniqueInput;

  @Field(() => ReplacementsUpdateWithoutBlockInput, { nullable: false })
  @Type(() => ReplacementsUpdateWithoutBlockInput)
  update!: ReplacementsUpdateWithoutBlockInput;

  @Field(() => ReplacementsCreateWithoutBlockInput, { nullable: false })
  @Type(() => ReplacementsCreateWithoutBlockInput)
  create!: ReplacementsCreateWithoutBlockInput;
}
