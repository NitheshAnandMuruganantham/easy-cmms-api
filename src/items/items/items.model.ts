import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { catagory } from '../../common-dto/catagory/catagory.model';
import { Replacements } from '../../replacements/replacements/replacements.model';
import { Block } from '../../block/block/block.model';
import { invoice_items } from '../../invoices/invoice-items/invoice-items.model';
import { ItemsCount } from './items-count.output';

@ObjectType()
export class Items {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => Float, { nullable: false })
  quantity!: number;

  @Field(() => Float, { nullable: false })
  unit_price!: number;

  @Field(() => GraphQLBigInt, { nullable: false })
  catagory_id!: bigint;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint;

  @Field(() => catagory, { nullable: false })
  catagory?: catagory;

  @Field(() => [Replacements], { nullable: true })
  replacements?: Array<Replacements>;

  @Field(() => Block, { nullable: false })
  block?: Block;

  @Field(() => [invoice_items], { nullable: true })
  invoice_items?: Array<invoice_items>;

  @Field(() => ItemsCount, { nullable: false })
  _count?: ItemsCount;
}
