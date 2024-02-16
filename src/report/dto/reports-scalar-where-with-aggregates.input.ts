import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../common-dto/prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../common-dto/prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../../common-dto/prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../common-dto/prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReportsScalarWhereWithAggregatesInput {
  @Field(() => [ReportsScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ReportsScalarWhereWithAggregatesInput>;

  @Field(() => [ReportsScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ReportsScalarWhereWithAggregatesInput>;

  @Field(() => [ReportsScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ReportsScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  report?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  sign?: StringWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  tag?: JsonWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  validated?: BigIntWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  validated_sign?: BigIntWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  maintance_id?: BigIntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @HideField()
  block_id?: BigIntWithAggregatesFilter;
}
