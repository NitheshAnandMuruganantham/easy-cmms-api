import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../../common-dto/prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { JsonFilter } from '../../../common-dto/prisma/json-filter.input';
import { IntFilter } from '../../../common-dto/prisma/int-filter.input';
import { DateTimeFilter } from '../../../common-dto/prisma/date-time-filter.input';
import { BlockRelationFilter } from '../../../block/dto/block/block-relation-filter.input';
import { SectionsRelationFilter } from '../../../section/dto/sections/sections-relation-filter.input';
import { MaintenanceListRelationFilter } from '../../../maintanance/dto/maintenance-list-relation-filter.input';
import { TicketListRelationFilter } from '../../../ticket/dto/ticket-list-relation-filter.input';
import { Machine_catagoryRelationFilter } from '../../../common-dto/prisma/machine-catagory-relation-filter.input';
import { Routine_maintanancesListRelationFilter } from '../../../common-dto/prisma/routine-maintanances-list-relation-filter.input';

@InputType()
export class MachinesWhereInput {
  @Field(() => [MachinesWhereInput], { nullable: true })
  AND?: Array<MachinesWhereInput>;

  @Field(() => [MachinesWhereInput], { nullable: true })
  OR?: Array<MachinesWhereInput>;

  @Field(() => [MachinesWhereInput], { nullable: true })
  NOT?: Array<MachinesWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => BigIntFilter, { nullable: true })
  section_id?: BigIntFilter;

  @HideField()
  block_id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  label?: StringFilter;

  @Field(() => JsonFilter, { nullable: true })
  profile?: JsonFilter;

  @Field(() => IntFilter, { nullable: true })
  priority?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => BigIntFilter, { nullable: true })
  machine_catagory_id?: BigIntFilter;

  @HideField()
  block?: BlockRelationFilter;

  @Field(() => SectionsRelationFilter, { nullable: true })
  section?: SectionsRelationFilter;

  @Field(() => MaintenanceListRelationFilter, { nullable: true })
  maintenance?: MaintenanceListRelationFilter;

  @Field(() => TicketListRelationFilter, { nullable: true })
  Ticket?: TicketListRelationFilter;

  @Field(() => Machine_catagoryRelationFilter, { nullable: true })
  machine_catagory?: Machine_catagoryRelationFilter;

  @Field(() => Routine_maintanancesListRelationFilter, { nullable: true })
  routine_maintanances?: Routine_maintanancesListRelationFilter;
}
