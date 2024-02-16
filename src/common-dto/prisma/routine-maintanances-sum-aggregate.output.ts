import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Routine_maintanancesSumAggregate {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => Int, { nullable: true })
  duration?: number;

  @Field(() => GraphQLBigInt, { nullable: true })
  assignee_id?: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: true })
  meachine_id?: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: true })
  block_id?: bigint | number;
}
