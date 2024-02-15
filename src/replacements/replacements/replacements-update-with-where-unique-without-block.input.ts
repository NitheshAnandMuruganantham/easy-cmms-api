import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Type } from 'class-transformer';
import { ReplacementsUpdateWithoutBlockInput } from './replacements-update-without-block.input';

@InputType()
export class ReplacementsUpdateWithWhereUniqueWithoutBlockInput {
  @Field(() => ReplacementsWhereUniqueInput, { nullable: false })
  @Type(() => ReplacementsWhereUniqueInput)
  where!: ReplacementsWhereUniqueInput;

  @Field(() => ReplacementsUpdateWithoutBlockInput, { nullable: false })
  @Type(() => ReplacementsUpdateWithoutBlockInput)
  data!: ReplacementsUpdateWithoutBlockInput;
}
