import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class SectionsMaxAggregate {
  @Field(() => Scalars.GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => GraphQLBigInt, { nullable: true })
  block_id?: bigint | number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;
}
