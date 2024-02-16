import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesUpdateWithoutRoutine_maintanancesInput } from './machines-update-without-routine-maintanances.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutRoutine_maintanancesInput } from './machines-create-without-routine-maintanances.input';

@InputType()
export class MachinesUpsertWithoutRoutine_maintanancesInput {
  @Field(() => MachinesUpdateWithoutRoutine_maintanancesInput, {
    nullable: false,
  })
  @Type(() => MachinesUpdateWithoutRoutine_maintanancesInput)
  update!: MachinesUpdateWithoutRoutine_maintanancesInput;

  @Field(() => MachinesCreateWithoutRoutine_maintanancesInput, {
    nullable: false,
  })
  @Type(() => MachinesCreateWithoutRoutine_maintanancesInput)
  create!: MachinesCreateWithoutRoutine_maintanancesInput;
}
