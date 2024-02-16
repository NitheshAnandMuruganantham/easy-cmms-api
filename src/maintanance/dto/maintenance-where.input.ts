import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { StringNullableFilter } from '../../common-dto/prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';
import { BoolFilter } from '../../common-dto/prisma/bool-filter.input';
import { JsonFilter } from '../../common-dto/prisma/json-filter.input';
import { DateTimeNullableFilter } from '../../common-dto/prisma/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { UsersRelationFilter } from '../../users/dto/users-relation-filter.input';
import { MachinesRelationFilter } from '../../machines/dto/machines/machines-relation-filter.input';
import { ReplacementsListRelationFilter } from '../../replacements/dto/replacements-list-relation-filter.input';
import { ReportsListRelationFilter } from '../../report/dto/reports-list-relation-filter.input';
import { TicketRelationFilter } from '../../ticket/dto/ticket-relation-filter.input';
import { BlockRelationFilter } from '../../block/dto/block/block-relation-filter.input';

@InputType()
export class MaintenanceWhereInput {
  @Field(() => [MaintenanceWhereInput], { nullable: true })
  AND?: Array<MaintenanceWhereInput>;

  @Field(() => [MaintenanceWhereInput], { nullable: true })
  OR?: Array<MaintenanceWhereInput>;

  @Field(() => [MaintenanceWhereInput], { nullable: true })
  NOT?: Array<MaintenanceWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  photo?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  from?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  to?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  resolved?: BoolFilter;

  @Field(() => JsonFilter, { nullable: true })
  metadata?: JsonFilter;

  @Field(() => BoolFilter, { nullable: true })
  un_planned?: BoolFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  elapsed?: DateTimeNullableFilter;

  @Field(() => BigIntFilter, { nullable: true })
  assignee_id?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  machine_id?: BigIntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @HideField()
  block_id?: BigIntFilter;

  @Field(() => UsersRelationFilter, { nullable: true })
  assignee?: UsersRelationFilter;

  @Field(() => MachinesRelationFilter, { nullable: true })
  machines?: MachinesRelationFilter;

  @Field(() => ReplacementsListRelationFilter, { nullable: true })
  replacements?: ReplacementsListRelationFilter;

  @Field(() => ReportsListRelationFilter, { nullable: true })
  reports?: ReportsListRelationFilter;

  @Field(() => TicketRelationFilter, { nullable: true })
  ticket?: TicketRelationFilter;

  @HideField()
  block?: BlockRelationFilter;
}
