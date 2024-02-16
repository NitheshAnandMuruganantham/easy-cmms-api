import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../common-dto/prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../common-dto/prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../common-dto/prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../common-dto/prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../../common-dto/prisma/bool-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../../common-dto/prisma/json-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../common-dto/prisma/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MaintenanceScalarWhereWithAggregatesInput {
  @Field(() => [MaintenanceScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<MaintenanceScalarWhereWithAggregatesInput>;

  @Field(() => [MaintenanceScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<MaintenanceScalarWhereWithAggregatesInput>;

  @Field(() => [MaintenanceScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<MaintenanceScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  photo?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  from?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  to?: DateTimeWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  resolved?: BoolWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  metadata?: JsonWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  un_planned?: BoolWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  elapsed?: DateTimeNullableWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  assignee_id?: BigIntWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  machine_id?: BigIntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @HideField()
  block_id?: BigIntWithAggregatesFilter;
}
