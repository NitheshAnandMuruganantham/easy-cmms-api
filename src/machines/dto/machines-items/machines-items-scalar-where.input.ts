import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../../common-dto/prisma/big-int-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machines_itemsScalarWhereInput {
  @Field(() => [machines_itemsScalarWhereInput], { nullable: true })
  AND?: Array<machines_itemsScalarWhereInput>;

  @Field(() => [machines_itemsScalarWhereInput], { nullable: true })
  OR?: Array<machines_itemsScalarWhereInput>;

  @Field(() => [machines_itemsScalarWhereInput], { nullable: true })
  NOT?: Array<machines_itemsScalarWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  machine_id?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  item_id?: BigIntFilter;

  @HideField()
  block_id?: BigIntFilter;
}
