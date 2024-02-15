import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MaintenanceSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  assignee_id?: true;

  @Field(() => Boolean, { nullable: true })
  machine_id?: true;

  @HideField()
  block_id?: true;
}
