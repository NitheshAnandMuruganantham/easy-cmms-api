import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../common-dto/prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../common-dto/prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../common-dto/prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class catagoryScalarWhereWithAggregatesInput {
  @Field(() => [catagoryScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<catagoryScalarWhereWithAggregatesInput>;

  @Field(() => [catagoryScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<catagoryScalarWhereWithAggregatesInput>;

  @Field(() => [catagoryScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<catagoryScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @HideField()
  block_id?: BigIntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;
}
