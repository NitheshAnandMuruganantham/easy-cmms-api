import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlockUpdateManyMutationInput } from './block-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BlockWhereInput } from './block-where.input';

@ArgsType()
export class UpdateManyBlockArgs {
  @Field(() => BlockUpdateManyMutationInput, { nullable: false })
  @Type(() => BlockUpdateManyMutationInput)
  data!: BlockUpdateManyMutationInput;

  @Field(() => BlockWhereInput, { nullable: true })
  @Type(() => BlockWhereInput)
  where?: BlockWhereInput;
}
