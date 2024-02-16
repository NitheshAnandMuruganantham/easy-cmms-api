import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';
import { routine_maintanancesUpdateWithoutMeachineInput } from './routine-maintanances-update-without-meachine.input';

@InputType()
export class routine_maintanancesUpdateWithWhereUniqueWithoutMeachineInput {
  @Field(() => routine_maintanancesWhereUniqueInput, { nullable: false })
  @Type(() => routine_maintanancesWhereUniqueInput)
  where!: routine_maintanancesWhereUniqueInput;

  @Field(() => routine_maintanancesUpdateWithoutMeachineInput, {
    nullable: false,
  })
  @Type(() => routine_maintanancesUpdateWithoutMeachineInput)
  data!: routine_maintanancesUpdateWithoutMeachineInput;
}
