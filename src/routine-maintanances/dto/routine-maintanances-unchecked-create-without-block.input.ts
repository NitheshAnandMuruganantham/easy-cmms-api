import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';

@InputType()
export class routine_maintanancesUncheckedCreateWithoutBlockInput {
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

  @Field(() => GraphQLBigInt, { nullable: false })
  assignee_id!: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  meachine_id!: bigint | number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;
}
