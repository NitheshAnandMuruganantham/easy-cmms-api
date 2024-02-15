import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class catagoryScalarWhereInput {
  @Field(() => [catagoryScalarWhereInput], { nullable: true })
  AND?: Array<catagoryScalarWhereInput>;

  @Field(() => [catagoryScalarWhereInput], { nullable: true })
  OR?: Array<catagoryScalarWhereInput>;

  @Field(() => [catagoryScalarWhereInput], { nullable: true })
  NOT?: Array<catagoryScalarWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @HideField()
  block_id?: BigIntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;
}
