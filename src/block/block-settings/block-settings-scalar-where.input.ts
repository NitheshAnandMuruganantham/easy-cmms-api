import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { JsonFilter } from '../../common-dto/prisma/json-filter.input';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';

@InputType()
export class block_settingsScalarWhereInput {
  @Field(() => [block_settingsScalarWhereInput], { nullable: true })
  AND?: Array<block_settingsScalarWhereInput>;

  @Field(() => [block_settingsScalarWhereInput], { nullable: true })
  OR?: Array<block_settingsScalarWhereInput>;

  @Field(() => [block_settingsScalarWhereInput], { nullable: true })
  NOT?: Array<block_settingsScalarWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  block_id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => JsonFilter, { nullable: true })
  value?: JsonFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;
}
