import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { UsersCreateNestedOneWithoutRoutine_maintanancesInput } from '../../users/dto/users-create-nested-one-without-routine-maintanances.input';
import { MachinesCreateNestedOneWithoutRoutine_maintanancesInput } from '../../machines/dto/machines/machines-create-nested-one-without-routine-maintanances.input';

@InputType()
export class routine_maintanancesCreateWithoutBlockInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  cron!: string;

  @Field(() => Int, { nullable: false })
  duration!: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => UsersCreateNestedOneWithoutRoutine_maintanancesInput, {
    nullable: false,
  })
  assignee!: UsersCreateNestedOneWithoutRoutine_maintanancesInput;

  @Field(() => MachinesCreateNestedOneWithoutRoutine_maintanancesInput, {
    nullable: false,
  })
  meachine!: MachinesCreateNestedOneWithoutRoutine_maintanancesInput;
}
