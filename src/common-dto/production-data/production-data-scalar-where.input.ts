import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class production_dataScalarWhereInput {
  @Field(() => [production_dataScalarWhereInput], { nullable: true })
  AND?: Array<production_dataScalarWhereInput>;

  @Field(() => [production_dataScalarWhereInput], { nullable: true })
  OR?: Array<production_dataScalarWhereInput>;

  @Field(() => [production_dataScalarWhereInput], { nullable: true })
  NOT?: Array<production_dataScalarWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => JsonFilter, { nullable: true })
  production?: JsonFilter;

  @Field(() => StringFilter, { nullable: true })
  shift?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  date?: DateTimeFilter;

  @Field(() => BigIntFilter, { nullable: true })
  updated_by?: BigIntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @HideField()
  blockId?: BigIntFilter;
}
