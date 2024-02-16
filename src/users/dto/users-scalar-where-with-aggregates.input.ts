import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../common-dto/prisma/big-int-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../../common-dto/prisma/json-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../common-dto/prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../common-dto/prisma/string-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../../common-dto/prisma/date-time-with-aggregates-filter.input';
import { EnumRoleWithAggregatesFilter } from '../../common-dto/prisma/enum-role-with-aggregates-filter.input';
import { EnumRoleNullableListFilter } from '../../common-dto/prisma/enum-role-nullable-list-filter.input';

@InputType()
export class UsersScalarWhereWithAggregatesInput {
  @Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UsersScalarWhereWithAggregatesInput>;

  @Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UsersScalarWhereWithAggregatesInput>;

  @Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UsersScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  profile?: JsonWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phone?: StringWithAggregatesFilter;

  @HideField()
  user_auth_id?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @HideField()
  blockId?: BigIntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
  role?: EnumRoleWithAggregatesFilter;

  @Field(() => EnumRoleNullableListFilter, { nullable: true })
  extra_roles?: EnumRoleNullableListFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  role_alias?: StringWithAggregatesFilter;
}
