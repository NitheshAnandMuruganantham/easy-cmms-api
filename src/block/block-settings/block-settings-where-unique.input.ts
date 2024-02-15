import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { block_settingsBlock_idNameCompoundUniqueInput } from './block-settings-block-id-name-compound-unique.input';

@InputType()
export class block_settingsWhereUniqueInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => block_settingsBlock_idNameCompoundUniqueInput, {
    nullable: true,
  })
  block_id_name?: block_settingsBlock_idNameCompoundUniqueInput;
}
