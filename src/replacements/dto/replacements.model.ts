import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLBigInt } from 'graphql-scalars';
import { Items } from '../../items/items/items.model';
import { Maintenance } from '../../maintanance/dto/maintenance.model';
import { Block } from '../../block/dto/block/block.model';

@ObjectType()
export class Replacements {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => GraphQLJSON, { nullable: false, defaultValue: '{}' })
  metadata!: any;

  @Field(() => GraphQLBigInt, { nullable: false })
  item_id!: bigint;

  @Field(() => GraphQLBigInt, { nullable: false })
  maintanance_id!: bigint;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  approved!: boolean;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint;

  @Field(() => Items, { nullable: false })
  items?: Items;

  @Field(() => Maintenance, { nullable: false })
  maintenance?: Maintenance;

  @Field(() => Block, { nullable: false })
  block?: Block;
}
