import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Items } from '../items/items.model';
import { ItemCatagoryCount } from './item-catagory-count.output';

@ObjectType()
export class ItemCatagory {
  @Field(() => ID, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [Items], { nullable: true })
  items?: Array<Items>;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => ItemCatagoryCount, { nullable: false })
  _count?: ItemCatagoryCount;
}
