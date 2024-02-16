import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../../common-dto/prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../../common-dto/prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../../common-dto/prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SectionScalarWhereWithAggregatesInput {
  @Field(() => [SectionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<SectionScalarWhereWithAggregatesInput>;

  @Field(() => [SectionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<SectionScalarWhereWithAggregatesInput>;

  @Field(() => [SectionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<SectionScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;
}
