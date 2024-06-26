import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../common-dto/prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../common-dto/prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../../common-dto/prisma/int-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../../common-dto/prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../common-dto/prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../../common-dto/prisma/bool-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReplacementsScalarWhereWithAggregatesInput {
  @Field(() => [ReplacementsScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ReplacementsScalarWhereWithAggregatesInput>;

  @Field(() => [ReplacementsScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ReplacementsScalarWhereWithAggregatesInput>;

  @Field(() => [ReplacementsScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ReplacementsScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: StringWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  quantity?: IntWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  metadata?: JsonWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  item_id?: BigIntWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  maintanance_id?: BigIntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  approved?: BoolWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @HideField()
  block_id?: BigIntWithAggregatesFilter;
}
