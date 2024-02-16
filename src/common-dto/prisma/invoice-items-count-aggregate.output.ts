import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Invoice_itemsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  invoice_id!: number;

  @Field(() => Int, { nullable: false })
  unit_price!: number;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => Int, { nullable: false })
  amount!: number;

  @Field(() => Int, { nullable: false })
  item_id!: number;

  @Field(() => Int, { nullable: false })
  block_id!: number;

  @Field(() => Int, { nullable: false })
  created_at!: number;

  @Field(() => Int, { nullable: false })
  updated_at!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
