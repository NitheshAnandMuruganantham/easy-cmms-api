import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutProduction_dataInput } from './block-update-without-production-data.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutProduction_dataInput } from './block-create-without-production-data.input';

@InputType()
export class BlockUpsertWithoutProduction_dataInput {
  @Field(() => BlockUpdateWithoutProduction_dataInput, { nullable: false })
  @Type(() => BlockUpdateWithoutProduction_dataInput)
  update!: BlockUpdateWithoutProduction_dataInput;

  @Field(() => BlockCreateWithoutProduction_dataInput, { nullable: false })
  @Type(() => BlockCreateWithoutProduction_dataInput)
  create!: BlockCreateWithoutProduction_dataInput;
}
