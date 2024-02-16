import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplacementsUpdateInput } from './replacements-update.input';
import { Type } from 'class-transformer';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';

@ArgsType()
export class UpdateOneReplacementsArgs {
  @Field(() => ReplacementsUpdateInput, { nullable: false })
  @Type(() => ReplacementsUpdateInput)
  data!: ReplacementsUpdateInput;

  @Field(() => ReplacementsWhereUniqueInput, { nullable: false })
  @Type(() => ReplacementsWhereUniqueInput)
  where!: ReplacementsWhereUniqueInput;
}
