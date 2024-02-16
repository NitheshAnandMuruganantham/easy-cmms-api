import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplacementsCreateInput } from './replacements-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReplacementsArgs {
  @Field(() => ReplacementsCreateInput, { nullable: false })
  @Type(() => ReplacementsCreateInput)
  data!: ReplacementsCreateInput;
}
