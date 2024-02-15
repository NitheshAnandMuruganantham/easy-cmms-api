import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionsUpdateInput } from './sections-update.input';
import { Type } from 'class-transformer';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';

@ArgsType()
export class UpdateOneSectionsArgs {
  @Field(() => SectionsUpdateInput, { nullable: false })
  @Type(() => SectionsUpdateInput)
  data!: SectionsUpdateInput;

  @Field(() => SectionsWhereUniqueInput, { nullable: false })
  @Type(() => SectionsWhereUniqueInput)
  where!: SectionsWhereUniqueInput;
}
