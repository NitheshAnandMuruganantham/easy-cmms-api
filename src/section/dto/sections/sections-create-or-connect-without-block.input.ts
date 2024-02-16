import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Type } from 'class-transformer';
import { SectionsCreateWithoutBlockInput } from './sections-create-without-block.input';

@InputType()
export class SectionsCreateOrConnectWithoutBlockInput {
  @Field(() => SectionsWhereUniqueInput, { nullable: false })
  @Type(() => SectionsWhereUniqueInput)
  where!: SectionsWhereUniqueInput;

  @Field(() => SectionsCreateWithoutBlockInput, { nullable: false })
  @Type(() => SectionsCreateWithoutBlockInput)
  create!: SectionsCreateWithoutBlockInput;
}
