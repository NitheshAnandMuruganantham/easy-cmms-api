import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';

@InputType()
export class SectionsScalarWhereInput {
  @Field(() => [SectionsScalarWhereInput], { nullable: true })
  AND?: Array<SectionsScalarWhereInput>;

  @Field(() => [SectionsScalarWhereInput], { nullable: true })
  OR?: Array<SectionsScalarWhereInput>;

  @Field(() => [SectionsScalarWhereInput], { nullable: true })
  NOT?: Array<SectionsScalarWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @HideField()
  block_id?: BigIntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;
}
