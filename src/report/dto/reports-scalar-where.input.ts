import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { JsonFilter } from '../../common-dto/prisma/json-filter.input';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReportsScalarWhereInput {
  @Field(() => [ReportsScalarWhereInput], { nullable: true })
  AND?: Array<ReportsScalarWhereInput>;

  @Field(() => [ReportsScalarWhereInput], { nullable: true })
  OR?: Array<ReportsScalarWhereInput>;

  @Field(() => [ReportsScalarWhereInput], { nullable: true })
  NOT?: Array<ReportsScalarWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  report?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  sign?: StringFilter;

  @Field(() => JsonFilter, { nullable: true })
  tag?: JsonFilter;

  @Field(() => BigIntFilter, { nullable: true })
  validated?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  validated_sign?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  maintance_id?: BigIntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @HideField()
  block_id?: BigIntFilter;
}
