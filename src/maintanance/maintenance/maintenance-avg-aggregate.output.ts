import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MaintenanceAvgAggregate {
  @Field(() => Float, { nullable: true })
  id?: number;

  @Field(() => Float, { nullable: true })
  assignee_id?: number;

  @Field(() => Float, { nullable: true })
  machine_id?: number;

  @Field(() => Float, { nullable: true })
  block_id?: number;
}
