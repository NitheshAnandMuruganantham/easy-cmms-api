import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class production_dataScalarWhereWithAggregatesInput {
  @Field(() => [production_dataScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<production_dataScalarWhereWithAggregatesInput>;

  @Field(() => [production_dataScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<production_dataScalarWhereWithAggregatesInput>;

  @Field(() => [production_dataScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<production_dataScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  production?: JsonWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  shift?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  date?: DateTimeWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  updated_by?: BigIntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @HideField()
  blockId?: BigIntWithAggregatesFilter;
}
