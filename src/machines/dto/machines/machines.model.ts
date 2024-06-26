import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Block } from '../../../block/dto/block/block.model';
import { Sections } from '../../../section/dto/sections/sections.model';
import { Maintenance } from '../../../maintanance/dto/maintenance.model';
import { Ticket } from '../../../ticket/dto/ticket.model';
import { machine_catagory } from '../../../machine_catagory/dto/machine-catagory.model';
import { routine_maintanances } from '../../../routine-maintanances/dto/routine-maintanances.model';
import { MachinesCount } from './machines-count.output';

@ObjectType()
export class Machines {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => GraphQLBigInt, { nullable: false })
  section_id!: bigint;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint;

  @Field(() => String, { nullable: false })
  label!: string;

  @Field(() => GraphQLJSON, { nullable: false, defaultValue: '{}' })
  profile!: any;

  @Field(() => Int, { nullable: false })
  priority!: number;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => GraphQLBigInt, { nullable: false })
  machine_catagory_id!: bigint;

  @Field(() => Block, { nullable: false })
  block?: Block;

  @Field(() => Sections, { nullable: false })
  section?: Sections;

  @Field(() => [Maintenance], { nullable: true })
  maintenance?: Array<Maintenance>;

  @Field(() => [Ticket], { nullable: true })
  Ticket?: Array<Ticket>;

  @Field(() => machine_catagory, { nullable: false })
  machine_catagory?: machine_catagory;

  @Field(() => [routine_maintanances], { nullable: true })
  routine_maintanances?: Array<routine_maintanances>;

  @Field(() => MachinesCount, { nullable: false })
  _count?: MachinesCount;
}
