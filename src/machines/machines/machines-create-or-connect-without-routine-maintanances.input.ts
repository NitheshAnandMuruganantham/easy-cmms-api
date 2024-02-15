import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutRoutine_maintanancesInput } from './machines-create-without-routine-maintanances.input';

@InputType()
export class MachinesCreateOrConnectWithoutRoutine_maintanancesInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesCreateWithoutRoutine_maintanancesInput, {
    nullable: false,
  })
  @Type(() => MachinesCreateWithoutRoutine_maintanancesInput)
  create!: MachinesCreateWithoutRoutine_maintanancesInput;
}
