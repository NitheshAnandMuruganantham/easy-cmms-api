import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { ItemsListRelationFilter } from '../items/items-list-relation-filter.input';
import { BlockRelationFilter } from '../../block/dto/block/block-relation-filter.input';

@InputType()
export class catagoryWhereInput {
  @Field(() => [catagoryWhereInput], { nullable: true })
  AND?: Array<catagoryWhereInput>;

  @Field(() => [catagoryWhereInput], { nullable: true })
  OR?: Array<catagoryWhereInput>;

  @Field(() => [catagoryWhereInput], { nullable: true })
  NOT?: Array<catagoryWhereInput>;

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

  @Field(() => ItemsListRelationFilter, { nullable: true })
  items?: ItemsListRelationFilter;

  @HideField()
  block?: BlockRelationFilter;
}
