import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReplacementsMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  description?: true;

  @Field(() => Boolean, { nullable: true })
  quantity?: true;

  @Field(() => Boolean, { nullable: true })
  item_id?: true;

  @Field(() => Boolean, { nullable: true })
  maintanance_id?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  approved?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @HideField()
  block_id?: true;
}
