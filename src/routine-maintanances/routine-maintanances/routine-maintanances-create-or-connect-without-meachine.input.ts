import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';
import { routine_maintanancesCreateWithoutMeachineInput } from './routine-maintanances-create-without-meachine.input';

@InputType()
export class routine_maintanancesCreateOrConnectWithoutMeachineInput {
  @Field(() => routine_maintanancesWhereUniqueInput, { nullable: false })
  @Type(() => routine_maintanancesWhereUniqueInput)
  where!: routine_maintanancesWhereUniqueInput;

  @Field(() => routine_maintanancesCreateWithoutMeachineInput, {
    nullable: false,
  })
  @Type(() => routine_maintanancesCreateWithoutMeachineInput)
  create!: routine_maintanancesCreateWithoutMeachineInput;
}
