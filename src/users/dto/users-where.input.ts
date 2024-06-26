import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { JsonFilter } from '../../common-dto/prisma/json-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { StringNullableFilter } from '../../common-dto/prisma/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';
import { EnumRoleFilter } from '../../common-dto/prisma/enum-role-filter.input';
import { EnumRoleNullableListFilter } from '../../common-dto/prisma/enum-role-nullable-list-filter.input';
import { BlockRelationFilter } from '../../block/dto/block/block-relation-filter.input';
import { MaintenanceListRelationFilter } from '../../maintanance/dto/maintenance-list-relation-filter.input';
import { TicketListRelationFilter } from '../../ticket/dto/ticket-list-relation-filter.input';
import { Routine_maintanancesListRelationFilter } from '../../common-dto/prisma/routine-maintanances-list-relation-filter.input';

@InputType()
export class UsersWhereInput {
  @Field(() => [UsersWhereInput], { nullable: true })
  AND?: Array<UsersWhereInput>;

  @Field(() => [UsersWhereInput], { nullable: true })
  OR?: Array<UsersWhereInput>;

  @Field(() => [UsersWhereInput], { nullable: true })
  NOT?: Array<UsersWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => JsonFilter, { nullable: true })
  profile?: JsonFilter;

  @Field(() => StringFilter, { nullable: true })
  phone?: StringFilter;

  @HideField()
  user_auth_id?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @HideField()
  blockId?: BigIntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => EnumRoleFilter, { nullable: true })
  role?: EnumRoleFilter;

  @Field(() => EnumRoleNullableListFilter, { nullable: true })
  extra_roles?: EnumRoleNullableListFilter;

  @Field(() => StringFilter, { nullable: true })
  role_alias?: StringFilter;

  @HideField()
  block?: BlockRelationFilter;

  @Field(() => MaintenanceListRelationFilter, { nullable: true })
  maintenance?: MaintenanceListRelationFilter;

  @Field(() => TicketListRelationFilter, { nullable: true })
  ticket?: TicketListRelationFilter;

  @Field(() => Routine_maintanancesListRelationFilter, { nullable: true })
  routine_maintanances?: Routine_maintanancesListRelationFilter;
}
