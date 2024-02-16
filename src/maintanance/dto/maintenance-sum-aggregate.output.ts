import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class MaintenanceSumAggregate {
  @Field(() => Scalars.GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: true })
  assignee_id?: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: true })
  machine_id?: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: true })
  block_id?: bigint | number;
}
