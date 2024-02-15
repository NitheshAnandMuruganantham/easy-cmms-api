import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutCatagoryInput } from './block-create-without-catagory.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutCatagoryInput } from './block-create-or-connect-without-catagory.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutCatagoryInput {
  @Field(() => BlockCreateWithoutCatagoryInput, { nullable: true })
  @Type(() => BlockCreateWithoutCatagoryInput)
  create?: BlockCreateWithoutCatagoryInput;

  @Field(() => BlockCreateOrConnectWithoutCatagoryInput, { nullable: true })
  @Type(() => BlockCreateOrConnectWithoutCatagoryInput)
  connectOrCreate?: BlockCreateOrConnectWithoutCatagoryInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;
}
