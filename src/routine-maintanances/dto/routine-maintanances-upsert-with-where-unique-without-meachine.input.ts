import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';
import { routine_maintanancesUpdateWithoutMeachineInput } from './routine-maintanances-update-without-meachine.input';
import { routine_maintanancesCreateWithoutMeachineInput } from './routine-maintanances-create-without-meachine.input';

@InputType()
export class routine_maintanancesUpsertWithWhereUniqueWithoutMeachineInput {
  @Field(() => routine_maintanancesWhereUniqueInput, { nullable: false })
  @Type(() => routine_maintanancesWhereUniqueInput)
  where!: routine_maintanancesWhereUniqueInput;

  @Field(() => routine_maintanancesUpdateWithoutMeachineInput, {
    nullable: false,
  })
  @Type(() => routine_maintanancesUpdateWithoutMeachineInput)
  update!: routine_maintanancesUpdateWithoutMeachineInput;

  @Field(() => routine_maintanancesCreateWithoutMeachineInput, {
    nullable: false,
  })
  @Type(() => routine_maintanancesCreateWithoutMeachineInput)
  create!: routine_maintanancesCreateWithoutMeachineInput;
}
