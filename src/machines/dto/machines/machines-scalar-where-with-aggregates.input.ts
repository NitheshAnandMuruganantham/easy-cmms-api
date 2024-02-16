import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../../common-dto/prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../../common-dto/prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { JsonWithAggregatesFilter } from '../../../common-dto/prisma/json-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../../../common-dto/prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../../common-dto/prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MachinesScalarWhereWithAggregatesInput {
  @Field(() => [MachinesScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<MachinesScalarWhereWithAggregatesInput>;

  @Field(() => [MachinesScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<MachinesScalarWhereWithAggregatesInput>;

  @Field(() => [MachinesScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<MachinesScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  section_id?: BigIntWithAggregatesFilter;

  @HideField()
  block_id?: BigIntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  label?: StringWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  profile?: JsonWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  priority?: IntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  machine_catagory_id?: BigIntWithAggregatesFilter;
}
