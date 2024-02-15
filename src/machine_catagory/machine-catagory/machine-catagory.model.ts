import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { Machines } from '../../machines/machines/machines.model';
import { Block } from '../../block/block/block.model';
import { Machine_catagoryCount } from '../../common-dto/prisma/machine-catagory-count.output';

@ObjectType()
export class machine_catagory {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => [Machines], { nullable: true })
  machines?: Array<Machines>;

  @Field(() => Block, { nullable: false })
  block?: Block;

  @Field(() => Machine_catagoryCount, { nullable: false })
  _count?: Machine_catagoryCount;
}
