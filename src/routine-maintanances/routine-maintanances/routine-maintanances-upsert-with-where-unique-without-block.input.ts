import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';
import { routine_maintanancesUpdateWithoutBlockInput } from './routine-maintanances-update-without-block.input';
import { routine_maintanancesCreateWithoutBlockInput } from './routine-maintanances-create-without-block.input';

@InputType()
export class routine_maintanancesUpsertWithWhereUniqueWithoutBlockInput {
  @Field(() => routine_maintanancesWhereUniqueInput, { nullable: false })
  @Type(() => routine_maintanancesWhereUniqueInput)
  where!: routine_maintanancesWhereUniqueInput;

  @Field(() => routine_maintanancesUpdateWithoutBlockInput, { nullable: false })
  @Type(() => routine_maintanancesUpdateWithoutBlockInput)
  update!: routine_maintanancesUpdateWithoutBlockInput;

  @Field(() => routine_maintanancesCreateWithoutBlockInput, { nullable: false })
  @Type(() => routine_maintanancesCreateWithoutBlockInput)
  create!: routine_maintanancesCreateWithoutBlockInput;
}
