import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemsCount {
  @Field(() => Int, { nullable: false })
  replacements?: number;

  @Field(() => Int, { nullable: false })
  invoice_items?: number;
}
