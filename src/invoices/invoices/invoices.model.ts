import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Block } from '../../block/block/block.model';
import { invoice_items } from '../invoice-items/invoice-items.model';
import { InvoicesCount } from './invoices-count.output';

@ObjectType()
export class Invoices {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint;

  @Field(() => Float, { nullable: false })
  total!: number;

  @Field(() => Date, { nullable: false })
  invoice_date!: Date;

  @Field(() => String, { nullable: false })
  number!: string;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => Block, { nullable: false })
  block?: Block;

  @Field(() => [invoice_items], { nullable: true })
  invoice_items?: Array<invoice_items>;

  @Field(() => InvoicesCount, { nullable: false })
  _count?: InvoicesCount;
}
