import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machines_itemsWhereInput } from '../../machines/machines-items/machines-items-where.input';
import { Type } from 'class-transformer';
import { machines_itemsOrderByWithAggregationInput } from '../../machines/machines-items/machines-items-order-by-with-aggregation.input';
import { Machines_itemsScalarFieldEnum } from '../../machines/machines/machines-items-scalar-field.enum';
import { machines_itemsScalarWhereWithAggregatesInput } from '../../machines/machines-items/machines-items-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymachinesItemsArgs {
  @Field(() => machines_itemsWhereInput, { nullable: true })
  @Type(() => machines_itemsWhereInput)
  where?: machines_itemsWhereInput;

  @Field(() => [machines_itemsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<machines_itemsOrderByWithAggregationInput>;

  @Field(() => [Machines_itemsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Machines_itemsScalarFieldEnum>;

  @Field(() => machines_itemsScalarWhereWithAggregatesInput, { nullable: true })
  having?: machines_itemsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
