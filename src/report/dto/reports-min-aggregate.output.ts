import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class ReportsMinAggregate {
  @Field(() => Scalars.GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: true })
  report?: string;

  @Field(() => String, { nullable: true })
  sign?: string;

  @Field(() => GraphQLBigInt, { nullable: true })
  validated?: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: true })
  validated_sign?: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: true })
  maintance_id?: bigint | number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => GraphQLBigInt, { nullable: true })
  block_id?: bigint | number;
}
