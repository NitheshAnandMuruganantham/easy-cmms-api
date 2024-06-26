import { Field, Float } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLBigInt } from 'graphql-scalars';
import { Users } from '../../users/dto/users.model';
import { Machines } from '../../machines/dto/machines/machines.model';
import { Replacements } from '../../replacements/dto/replacements.model';
import { Reports } from '../../report/dto/reports.model';
import { Ticket } from '../../ticket/dto/ticket.model';
import { Block } from '../../block/dto/block/block.model';
import { MaintenanceCount } from './maintenance-count.output';

@ObjectType()
export class Maintenance {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Float, { nullable: true })
  service_cost?: number | null;

  @Field(() => Float, { nullable: true })
  other_cost?: number | null;

  @Field(() => String, { nullable: true })
  photo!: string | null;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Date, { nullable: false })
  from!: Date;

  @Field(() => Date, { nullable: false })
  to!: Date;

  @Field(() => Boolean, { nullable: false })
  resolved!: boolean;

  @Field(() => GraphQLJSON, { nullable: false, defaultValue: '{}' })
  metadata!: any;

  @Field(() => Boolean, { nullable: false })
  un_planned!: boolean;

  @Field(() => Date, { nullable: true })
  elapsed!: Date | null;

  @Field(() => GraphQLBigInt, { nullable: false })
  assignee_id!: bigint;

  @Field(() => GraphQLBigInt, { nullable: false })
  machine_id!: bigint;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint;

  @Field(() => Users, { nullable: false })
  assignee?: Users;

  @Field(() => Machines, { nullable: false })
  machines?: Machines;

  @Field(() => [Replacements], { nullable: true })
  replacements?: Array<Replacements>;

  @Field(() => [Reports], { nullable: true })
  reports?: Array<Reports>;

  @Field(() => Ticket, { nullable: true })
  ticket?: Ticket | null;

  @Field(() => Block, { nullable: false })
  block?: Block;

  @Field(() => MaintenanceCount, { nullable: false })
  _count?: MaintenanceCount;
}
