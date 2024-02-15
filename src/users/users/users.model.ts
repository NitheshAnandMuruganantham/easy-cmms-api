import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Role } from '../../common-dto/prisma/role.enum';
import { Block } from '../../block/block/block.model';
import { Maintenance } from '../../maintanance/maintenance/maintenance.model';
import { Ticket } from '../../ticket/ticket/ticket.model';
import { routine_maintanances } from '../../routine-maintanances/routine-maintanances/routine-maintanances.model';
import { UsersCount } from './users-count.output';

@ObjectType()
export class Users {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint;

  @Field(() => GraphQLJSON, { nullable: false, defaultValue: '{}' })
  profile!: any;

  @Field(() => String, { nullable: false })
  phone!: string;

  @HideField()
  user_auth_id!: string | null;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => GraphQLBigInt, { nullable: false })
  blockId!: bigint;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => Role, { nullable: false })
  role!: keyof typeof Role;

  @Field(() => [Role], { nullable: true })
  extra_roles!: Array<keyof typeof Role>;

  @Field(() => String, { nullable: false, defaultValue: 'user' })
  role_alias!: string;

  @Field(() => Block, { nullable: false })
  block?: Block;

  @Field(() => [Maintenance], { nullable: true })
  maintenance?: Array<Maintenance>;

  @Field(() => [Ticket], { nullable: true })
  ticket?: Array<Ticket>;

  @Field(() => [routine_maintanances], { nullable: true })
  routine_maintanances?: Array<routine_maintanances>;

  @Field(() => UsersCount, { nullable: false })
  _count?: UsersCount;
}
