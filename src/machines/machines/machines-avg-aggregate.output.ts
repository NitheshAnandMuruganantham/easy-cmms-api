import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MachinesAvgAggregate {
  @Field(() => Float, { nullable: true })
  id?: number;

  @Field(() => Float, { nullable: true })
  section_id?: number;

  @Field(() => Float, { nullable: true })
  block_id?: number;

  @Field(() => Float, { nullable: true })
  priority?: number;

  @Field(() => Float, { nullable: true })
  machine_catagory_id?: number;
}
