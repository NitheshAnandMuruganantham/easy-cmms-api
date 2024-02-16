import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSectionOrThrowArgs {
  @Field(() => SectionWhereUniqueInput, { nullable: false })
  @Type(() => SectionWhereUniqueInput)
  where!: SectionWhereUniqueInput;
}
