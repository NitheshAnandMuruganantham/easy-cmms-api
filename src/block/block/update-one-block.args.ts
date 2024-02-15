import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlockUpdateInput } from './block-update.input';
import { Type } from 'class-transformer';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@ArgsType()
export class UpdateOneBlockArgs {
  @Field(() => BlockUpdateInput, { nullable: false })
  @Type(() => BlockUpdateInput)
  data!: BlockUpdateInput;

  @Field(() => BlockWhereUniqueInput, { nullable: false })
  @Type(() => BlockWhereUniqueInput)
  where!: BlockWhereUniqueInput;
}
