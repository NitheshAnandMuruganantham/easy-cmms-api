import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { IntFilter } from '../../common-dto/prisma/int-filter.input';
import { JsonFilter } from '../../common-dto/prisma/json-filter.input';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';
import { BoolFilter } from '../../common-dto/prisma/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { ItemsRelationFilter } from '../../items/items/items-relation-filter.input';
import { MaintenanceRelationFilter } from '../../maintanance/dto/maintenance-relation-filter.input';
import { BlockRelationFilter } from '../../block/dto/block/block-relation-filter.input';

@InputType()
export class ReplacementsWhereInput {
  @Field(() => [ReplacementsWhereInput], { nullable: true })
  AND?: Array<ReplacementsWhereInput>;

  @Field(() => [ReplacementsWhereInput], { nullable: true })
  OR?: Array<ReplacementsWhereInput>;

  @Field(() => [ReplacementsWhereInput], { nullable: true })
  NOT?: Array<ReplacementsWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  quantity?: IntFilter;

  @Field(() => JsonFilter, { nullable: true })
  metadata?: JsonFilter;

  @Field(() => BigIntFilter, { nullable: true })
  item_id?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  maintanance_id?: BigIntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  approved?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @HideField()
  block_id?: BigIntFilter;

  @Field(() => ItemsRelationFilter, { nullable: true })
  items?: ItemsRelationFilter;

  @Field(() => MaintenanceRelationFilter, { nullable: true })
  maintenance?: MaintenanceRelationFilter;

  @HideField()
  block?: BlockRelationFilter;
}
