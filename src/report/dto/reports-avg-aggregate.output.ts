import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ReportsAvgAggregate {
  @Field(() => Float, { nullable: true })
  id?: number;

  @Field(() => Float, { nullable: true })
  validated?: number;

  @Field(() => Float, { nullable: true })
  validated_sign?: number;

  @Field(() => Float, { nullable: true })
  maintance_id?: number;

  @Field(() => Float, { nullable: true })
  block_id?: number;
}
