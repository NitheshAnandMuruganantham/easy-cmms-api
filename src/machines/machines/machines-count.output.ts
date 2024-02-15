import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MachinesCount {
  @Field(() => Int, { nullable: false })
  maintenance?: number;

  @Field(() => Int, { nullable: false })
  Ticket?: number;

  @Field(() => Int, { nullable: false })
  routine_maintanances?: number;
}
