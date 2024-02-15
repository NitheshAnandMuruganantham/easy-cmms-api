import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class block_settingsBlock_idNameCompoundUniqueInput {
  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;
}
