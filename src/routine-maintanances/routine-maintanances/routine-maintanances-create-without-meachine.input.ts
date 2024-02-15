import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { UsersCreateNestedOneWithoutRoutine_maintanancesInput } from '../../users/users/users-create-nested-one-without-routine-maintanances.input';
import { BlockCreateNestedOneWithoutRoutine_maintanancesInput } from '../../block/block/block-create-nested-one-without-routine-maintanances.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class routine_maintanancesCreateWithoutMeachineInput {
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

  @HideField()
  block!: BlockCreateNestedOneWithoutRoutine_maintanancesInput;
}
