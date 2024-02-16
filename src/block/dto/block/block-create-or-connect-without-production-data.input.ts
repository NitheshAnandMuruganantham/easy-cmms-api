import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutProduction_dataInput } from './block-create-without-production-data.input';

@InputType()
export class BlockCreateOrConnectWithoutProduction_dataInput {
  @Field(() => BlockWhereUniqueInput, { nullable: false })
  @Type(() => BlockWhereUniqueInput)
  where!: BlockWhereUniqueInput;

  @Field(() => BlockCreateWithoutProduction_dataInput, { nullable: false })
  @Type(() => BlockCreateWithoutProduction_dataInput)
  create!: BlockCreateWithoutProduction_dataInput;
}
