import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutRoutine_maintanancesInput } from './machines-create-without-routine-maintanances.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutRoutine_maintanancesInput } from './machines-create-or-connect-without-routine-maintanances.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesCreateNestedOneWithoutRoutine_maintanancesInput {
  @Field(() => MachinesCreateWithoutRoutine_maintanancesInput, {
    nullable: true,
  })
  @Type(() => MachinesCreateWithoutRoutine_maintanancesInput)
  create?: MachinesCreateWithoutRoutine_maintanancesInput;

  @Field(() => MachinesCreateOrConnectWithoutRoutine_maintanancesInput, {
    nullable: true,
  })
  @Type(() => MachinesCreateOrConnectWithoutRoutine_maintanancesInput)
  connectOrCreate?: MachinesCreateOrConnectWithoutRoutine_maintanancesInput;

  @Field(() => MachinesWhereUniqueInput, { nullable: true })
  @Type(() => MachinesWhereUniqueInput)
  connect?: MachinesWhereUniqueInput;
}
