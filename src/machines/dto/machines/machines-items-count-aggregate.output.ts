import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Machines_itemsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  machine_id!: number;

  @Field(() => Int, { nullable: false })
  item_id!: number;

  @Field(() => Int, { nullable: false })
  block_id!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
