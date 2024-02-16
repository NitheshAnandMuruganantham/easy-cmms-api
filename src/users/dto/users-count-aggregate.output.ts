import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UsersCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  profile!: number;

  @Field(() => Int, { nullable: false })
  phone!: number;

  @HideField()
  user_auth_id!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  blockId!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  role!: number;

  @Field(() => Int, { nullable: false })
  extra_roles!: number;

  @Field(() => Int, { nullable: false })
  role_alias!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
