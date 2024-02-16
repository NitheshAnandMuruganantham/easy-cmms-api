import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutProduction_dataInput } from './block-create-without-production-data.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutProduction_dataInput } from './block-create-or-connect-without-production-data.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutProduction_dataInput {
  @Field(() => BlockCreateWithoutProduction_dataInput, { nullable: true })
  @Type(() => BlockCreateWithoutProduction_dataInput)
  create?: BlockCreateWithoutProduction_dataInput;

  @Field(() => BlockCreateOrConnectWithoutProduction_dataInput, {
    nullable: true,
  })
  @Type(() => BlockCreateOrConnectWithoutProduction_dataInput)
  connectOrCreate?: BlockCreateOrConnectWithoutProduction_dataInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;
}
