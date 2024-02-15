import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { ItemsListRelationFilter } from '../../items/items/items-list-relation-filter.input';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';

@InputType()
export class ItemCatagoryWhereInput {
  @Field(() => [ItemCatagoryWhereInput], { nullable: true })
  AND?: Array<ItemCatagoryWhereInput>;

  @Field(() => [ItemCatagoryWhereInput], { nullable: true })
  OR?: Array<ItemCatagoryWhereInput>;

  @Field(() => [ItemCatagoryWhereInput], { nullable: true })
  NOT?: Array<ItemCatagoryWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => ItemsListRelationFilter, { nullable: true })
  items?: ItemsListRelationFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;
}
