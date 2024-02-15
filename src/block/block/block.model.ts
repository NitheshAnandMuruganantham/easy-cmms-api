import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Machines } from '../../machines/machines/machines.model';
import { Users } from '../../users/users/users.model';
import { block_settings } from '../block-settings/block-settings.model';
import { catagory } from '../../common-dto/catagory/catagory.model';
import { Items } from '../../items/items/items.model';
import { machine_catagory } from '../../machine_catagory/machine-catagory/machine-catagory.model';
import { Maintenance } from '../../maintanance/maintenance/maintenance.model';
import { Replacements } from '../../replacements/replacements/replacements.model';
import { Reports } from '../../report/reports/reports.model';
import { Sections } from '../../section/sections/sections.model';
import { Ticket } from '../../ticket/ticket/ticket.model';
import { routine_maintanances } from '../../routine-maintanances/routine-maintanances/routine-maintanances.model';
import { Invoices } from '../../invoices/invoices/invoices.model';
import { invoice_items } from '../../invoices/invoice-items/invoice-items.model';
import { BlockCount } from './block-count.output';

@ObjectType()
export class Block {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  location!: string;

  @Field(() => [String], { nullable: true })
  Mailings!: Array<string>;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => [Machines], { nullable: true })
  machines?: Array<Machines>;

  @Field(() => [Users], { nullable: true })
  Users?: Array<Users>;

  @Field(() => [block_settings], { nullable: true })
  block_settings?: Array<block_settings>;

  @Field(() => [catagory], { nullable: true })
  catagory?: Array<catagory>;

  @Field(() => [Items], { nullable: true })
  Items?: Array<Items>;

  @Field(() => [machine_catagory], { nullable: true })
  machine_catagory?: Array<machine_catagory>;

  @Field(() => [Maintenance], { nullable: true })
  Maintenance?: Array<Maintenance>;

  @Field(() => [Replacements], { nullable: true })
  Replacements?: Array<Replacements>;

  @Field(() => [Reports], { nullable: true })
  Reports?: Array<Reports>;

  @Field(() => [Sections], { nullable: true })
  Sections?: Array<Sections>;

  @Field(() => [Ticket], { nullable: true })
  Ticket?: Array<Ticket>;

  @Field(() => [routine_maintanances], { nullable: true })
  routine_maintanances?: Array<routine_maintanances>;

  @Field(() => [Invoices], { nullable: true })
  Invoices?: Array<Invoices>;

  @Field(() => [invoice_items], { nullable: true })
  invoice_items?: Array<invoice_items>;

  @Field(() => BlockCount, { nullable: false })
  _count?: BlockCount;
}
