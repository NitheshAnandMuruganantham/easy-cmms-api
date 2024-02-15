import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutMachine_catagoryInput } from './block-create-without-machine-catagory.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutMachine_catagoryInput } from './block-create-or-connect-without-machine-catagory.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutMachine_catagoryInput {
  @Field(() => BlockCreateWithoutMachine_catagoryInput, { nullable: true })
  @Type(() => BlockCreateWithoutMachine_catagoryInput)
  create?: BlockCreateWithoutMachine_catagoryInput;

  @Field(() => BlockCreateOrConnectWithoutMachine_catagoryInput, {
    nullable: true,
  })
  @Type(() => BlockCreateOrConnectWithoutMachine_catagoryInput)
  connectOrCreate?: BlockCreateOrConnectWithoutMachine_catagoryInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;
}
