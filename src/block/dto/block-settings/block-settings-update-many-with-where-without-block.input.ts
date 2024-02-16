import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { block_settingsScalarWhereInput } from './block-settings-scalar-where.input';
import { Type } from 'class-transformer';
import { block_settingsUpdateManyMutationInput } from './block-settings-update-many-mutation.input';

@InputType()
export class block_settingsUpdateManyWithWhereWithoutBlockInput {
  @Field(() => block_settingsScalarWhereInput, { nullable: false })
  @Type(() => block_settingsScalarWhereInput)
  where!: block_settingsScalarWhereInput;

  @Field(() => block_settingsUpdateManyMutationInput, { nullable: false })
  @Type(() => block_settingsUpdateManyMutationInput)
  data!: block_settingsUpdateManyMutationInput;
}
