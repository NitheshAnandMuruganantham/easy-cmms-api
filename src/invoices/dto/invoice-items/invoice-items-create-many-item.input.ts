import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class invoice_itemsCreateManyItemInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  invoice_id!: bigint | number;

  @Field(() => Float, { nullable: false })
  unit_price!: number;

  @Field(() => Float, { nullable: false })
  quantity!: number;

  @Field(() => Float, { nullable: false })
  amount!: number;

  @HideField()
  block_id!: bigint | number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;
}
