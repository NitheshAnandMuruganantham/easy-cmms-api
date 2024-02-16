import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class BigIntNullableListFilter {
  @Field(() => [GraphQLBigInt], { nullable: true })
  equals?: Array<bigint> | Array<number>;

  @Field(() => GraphQLBigInt, { nullable: true })
  has?: bigint | number;

  @Field(() => [GraphQLBigInt], { nullable: true })
  hasEvery?: Array<bigint> | Array<number>;

  @Field(() => [GraphQLBigInt], { nullable: true })
  hasSome?: Array<bigint> | Array<number>;

  @Field(() => Boolean, { nullable: true })
  isEmpty?: boolean;
}
