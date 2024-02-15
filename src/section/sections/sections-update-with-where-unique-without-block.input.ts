import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Type } from 'class-transformer';
import { SectionsUpdateWithoutBlockInput } from './sections-update-without-block.input';

@InputType()
export class SectionsUpdateWithWhereUniqueWithoutBlockInput {
  @Field(() => SectionsWhereUniqueInput, { nullable: false })
  @Type(() => SectionsWhereUniqueInput)
  where!: SectionsWhereUniqueInput;

  @Field(() => SectionsUpdateWithoutBlockInput, { nullable: false })
  @Type(() => SectionsUpdateWithoutBlockInput)
  data!: SectionsUpdateWithoutBlockInput;
}
