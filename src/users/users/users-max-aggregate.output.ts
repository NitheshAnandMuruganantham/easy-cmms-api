import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Role } from '../../common-dto/prisma/role.enum';

@ObjectType()
export class UsersMaxAggregate {
  @Field(() => Scalars.GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: true })
  phone?: string;

  @HideField()
  user_auth_id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => GraphQLBigInt, { nullable: true })
  blockId?: bigint | number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;

  @Field(() => String, { nullable: true })
  role_alias?: string;
}
