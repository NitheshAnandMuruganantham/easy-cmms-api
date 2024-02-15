import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TicketAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @HideField()
  user_id?: true;

  @Field(() => Boolean, { nullable: true })
  maintenance_id?: true;

  @Field(() => Boolean, { nullable: true })
  machine_id?: true;

  @HideField()
  block_id?: true;
}
