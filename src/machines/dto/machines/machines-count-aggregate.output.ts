import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MachinesCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  section_id!: number;

  @Field(() => Int, { nullable: false })
  block_id!: number;

  @Field(() => Int, { nullable: false })
  label!: number;

  @Field(() => Int, { nullable: false })
  profile!: number;

  @Field(() => Int, { nullable: false })
  priority!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  machine_catagory_id!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
