import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../../common-dto/prisma/big-int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../../../common-dto/prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../../common-dto/prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../../common-dto/prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class InvoicesScalarWhereWithAggregatesInput {
  @Field(() => [InvoicesScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<InvoicesScalarWhereWithAggregatesInput>;

  @Field(() => [InvoicesScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<InvoicesScalarWhereWithAggregatesInput>;

  @Field(() => [InvoicesScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<InvoicesScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  total?: FloatWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  invoice_date?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  number?: StringWithAggregatesFilter;

  @HideField()
  block_id?: BigIntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;
}
