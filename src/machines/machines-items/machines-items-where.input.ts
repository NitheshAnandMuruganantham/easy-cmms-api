import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { HideField } from '@nestjs/graphql';
import { MachinesRelationFilter } from '../machines/machines-relation-filter.input';
import { ItemsRelationFilter } from '../../items/items/items-relation-filter.input';
import { BlockRelationFilter } from '../../block/block/block-relation-filter.input';

@InputType()
export class machines_itemsWhereInput {
  @Field(() => [machines_itemsWhereInput], { nullable: true })
  AND?: Array<machines_itemsWhereInput>;

  @Field(() => [machines_itemsWhereInput], { nullable: true })
  OR?: Array<machines_itemsWhereInput>;

  @Field(() => [machines_itemsWhereInput], { nullable: true })
  NOT?: Array<machines_itemsWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  machine_id?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  item_id?: BigIntFilter;

  @HideField()
  block_id?: BigIntFilter;

  @Field(() => MachinesRelationFilter, { nullable: true })
  machine?: MachinesRelationFilter;

  @Field(() => ItemsRelationFilter, { nullable: true })
  items?: ItemsRelationFilter;

  @HideField()
  block?: BlockRelationFilter;
}
