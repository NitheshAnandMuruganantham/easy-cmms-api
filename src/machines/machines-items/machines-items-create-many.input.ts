import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machines_itemsCreateManyInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  machine_id!: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  item_id!: bigint | number;

  @HideField()
  block_id!: bigint | number;
}
