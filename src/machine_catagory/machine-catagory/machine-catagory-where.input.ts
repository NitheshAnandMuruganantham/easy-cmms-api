import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';
import { MachinesListRelationFilter } from '../../machines/machines/machines-list-relation-filter.input';
import { BlockRelationFilter } from '../../block/block/block-relation-filter.input';

@InputType()
export class machine_catagoryWhereInput {
  @Field(() => [machine_catagoryWhereInput], { nullable: true })
  AND?: Array<machine_catagoryWhereInput>;

  @Field(() => [machine_catagoryWhereInput], { nullable: true })
  OR?: Array<machine_catagoryWhereInput>;

  @Field(() => [machine_catagoryWhereInput], { nullable: true })
  NOT?: Array<machine_catagoryWhereInput>;

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

  @Field(() => MachinesListRelationFilter, { nullable: true })
  machines?: MachinesListRelationFilter;

  @HideField()
  block?: BlockRelationFilter;
}
