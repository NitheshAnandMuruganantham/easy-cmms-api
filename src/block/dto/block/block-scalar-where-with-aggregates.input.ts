import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../../common-dto/prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../../common-dto/prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../../../common-dto/prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../../../common-dto/prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BlockScalarWhereWithAggregatesInput {
  @Field(() => [BlockScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BlockScalarWhereWithAggregatesInput>;

  @Field(() => [BlockScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BlockScalarWhereWithAggregatesInput>;

  @Field(() => [BlockScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BlockScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  location?: StringWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  Mailings?: StringNullableListFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;
}
