import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { FloatFilter } from '../../common-dto/prisma/float-filter.input';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { CatagoryRelationFilter } from '../../common-dto/prisma/catagory-relation-filter.input';
import { ReplacementsListRelationFilter } from '../../replacements/dto/replacements-list-relation-filter.input';
import { BlockRelationFilter } from '../../block/dto/block/block-relation-filter.input';
import { Invoice_itemsListRelationFilter } from '../../common-dto/prisma/invoice-items-list-relation-filter.input';

@InputType()
export class ItemsWhereInput {
  @Field(() => [ItemsWhereInput], { nullable: true })
  AND?: Array<ItemsWhereInput>;

  @Field(() => [ItemsWhereInput], { nullable: true })
  OR?: Array<ItemsWhereInput>;

  @Field(() => [ItemsWhereInput], { nullable: true })
  NOT?: Array<ItemsWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  code?: StringFilter;

  @Field(() => FloatFilter, { nullable: true })
  quantity?: FloatFilter;

  @Field(() => FloatFilter, { nullable: true })
  unit_price?: FloatFilter;

  @Field(() => BigIntFilter, { nullable: true })
  catagory_id?: BigIntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @HideField()
  block_id?: BigIntFilter;

  @Field(() => CatagoryRelationFilter, { nullable: true })
  catagory?: CatagoryRelationFilter;

  @Field(() => ReplacementsListRelationFilter, { nullable: true })
  replacements?: ReplacementsListRelationFilter;

  @HideField()
  block?: BlockRelationFilter;

  @Field(() => Invoice_itemsListRelationFilter, { nullable: true })
  invoice_items?: Invoice_itemsListRelationFilter;
}
