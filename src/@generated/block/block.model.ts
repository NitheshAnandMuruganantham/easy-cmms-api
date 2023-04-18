import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Machines } from '../machines/machines.model';
import { Users } from '../users/users.model';
import { block_settings } from '../block-settings/block-settings.model';
import { production_data } from '../production-data/production-data.model';
import { catagory } from '../catagory/catagory.model';
import { Items } from '../items/items.model';
import { machine_catagory } from '../machine-catagory/machine-catagory.model';
import { Maintenance } from '../maintenance/maintenance.model';
import { Replacements } from '../replacements/replacements.model';
import { Reports } from '../reports/reports.model';
import { Sections } from '../sections/sections.model';
import { Ticket } from '../ticket/ticket.model';
import { routine_maintanances } from '../routine-maintanances/routine-maintanances.model';
import { machines_items } from '../machines-items/machines-items.model';
import { BlockCount } from './block-count.output';

@ObjectType()
export class Block {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => [String], {nullable:true})
    Mailings!: Array<string>;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [Machines], {nullable:true})
    machines?: Array<Machines>;

    @Field(() => [Users], {nullable:true})
    Users?: Array<Users>;

    @Field(() => [block_settings], {nullable:true})
    block_settings?: Array<block_settings>;

    @Field(() => [production_data], {nullable:true})
    production_data?: Array<production_data>;

    @Field(() => [catagory], {nullable:true})
    catagory?: Array<catagory>;

    @Field(() => [Items], {nullable:true})
    Items?: Array<Items>;

    @Field(() => [machine_catagory], {nullable:true})
    machine_catagory?: Array<machine_catagory>;

    @Field(() => [Maintenance], {nullable:true})
    Maintenance?: Array<Maintenance>;

    @Field(() => [Replacements], {nullable:true})
    Replacements?: Array<Replacements>;

    @Field(() => [Reports], {nullable:true})
    Reports?: Array<Reports>;

    @Field(() => [Sections], {nullable:true})
    Sections?: Array<Sections>;

    @Field(() => [Ticket], {nullable:true})
    Ticket?: Array<Ticket>;

    @Field(() => [routine_maintanances], {nullable:true})
    routine_maintanances?: Array<routine_maintanances>;

    @Field(() => [machines_items], {nullable:true})
    machines_items?: Array<machines_items>;

    @Field(() => BlockCount, {nullable:false})
    _count?: BlockCount;
}
