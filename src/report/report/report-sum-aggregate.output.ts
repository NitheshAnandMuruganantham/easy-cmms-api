import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReportSumAggregate {
  @Field(() => String, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: true })
  validated?: bigint | number;

  @Field(() => String, { nullable: true })
  validated_sign?: bigint | number;

  @Field(() => String, { nullable: true })
  maintance_id?: bigint | number;
}
