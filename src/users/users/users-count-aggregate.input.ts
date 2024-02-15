import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UsersCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  profile?: true;

  @Field(() => Boolean, { nullable: true })
  phone?: true;

  @HideField()
  user_auth_id?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @HideField()
  blockId?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  role?: true;

  @Field(() => Boolean, { nullable: true })
  extra_roles?: true;

  @Field(() => Boolean, { nullable: true })
  role_alias?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
