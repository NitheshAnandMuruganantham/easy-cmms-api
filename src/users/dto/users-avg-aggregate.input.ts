import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UsersAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @HideField()
  blockId?: true;
}
