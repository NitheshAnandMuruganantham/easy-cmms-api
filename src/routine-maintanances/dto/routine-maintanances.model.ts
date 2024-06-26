import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Users } from '../../users/dto/users.model';
import { Machines } from '../../machines/dto/machines/machines.model';
import { Block } from '../../block/dto/block/block.model';

@ObjectType()
export class routine_maintanances {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  cron!: string;

  @Field(() => Int, { nullable: false })
  duration!: number;

  @Field(() => GraphQLBigInt, { nullable: false })
  assignee_id!: bigint;

  @Field(() => GraphQLBigInt, { nullable: false })
  meachine_id!: bigint;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint;

  @Field(() => Users, { nullable: false })
  assignee?: Users;

  @Field(() => Machines, { nullable: false })
  meachine?: Machines;

  @Field(() => Block, { nullable: false })
  block?: Block;
}
