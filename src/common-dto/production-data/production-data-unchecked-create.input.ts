import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';

@InputType()
export class production_dataUncheckedCreateInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => GraphQLJSON, { nullable: true })
  production?: any;

  @Field(() => String, { nullable: false })
  shift!: string;

  @Field(() => Date, { nullable: false })
  date!: Date | string;

  @Field(() => GraphQLBigInt, { nullable: false })
  updated_by!: bigint | number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @HideField()
  blockId!: bigint | number;
}
