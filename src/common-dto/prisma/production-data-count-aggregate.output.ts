import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Production_dataCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  production!: number;

  @Field(() => Int, { nullable: false })
  shift!: number;

  @Field(() => Int, { nullable: false })
  date!: number;

  @Field(() => Int, { nullable: false })
  updated_by!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  blockId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
