import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../../common-dto/prisma/big-int-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machines_itemsScalarWhereWithAggregatesInput {
  @Field(() => [machines_itemsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<machines_itemsScalarWhereWithAggregatesInput>;

  @Field(() => [machines_itemsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<machines_itemsScalarWhereWithAggregatesInput>;

  @Field(() => [machines_itemsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<machines_itemsScalarWhereWithAggregatesInput>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  machine_id?: BigIntWithAggregatesFilter;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  item_id?: BigIntWithAggregatesFilter;

  @HideField()
  block_id?: BigIntWithAggregatesFilter;
}
