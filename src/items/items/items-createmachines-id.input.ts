import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class ItemsCreatemachines_idInput {
  @Field(() => [GraphQLBigInt], { nullable: false })
  set!: Array<bigint> | Array<number>;
}
