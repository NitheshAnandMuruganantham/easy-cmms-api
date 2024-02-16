import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../../common-dto/prisma/string-filter.input';
import { MachinesListRelationFilter } from '../../../machines/dto/machines/machines-list-relation-filter.input';
import { DateTimeFilter } from '../../../common-dto/prisma/date-time-filter.input';

@InputType()
export class SectionWhereInput {
  @Field(() => [SectionWhereInput], { nullable: true })
  AND?: Array<SectionWhereInput>;

  @Field(() => [SectionWhereInput], { nullable: true })
  OR?: Array<SectionWhereInput>;

  @Field(() => [SectionWhereInput], { nullable: true })
  NOT?: Array<SectionWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => MachinesListRelationFilter, { nullable: true })
  machines?: MachinesListRelationFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;
}
