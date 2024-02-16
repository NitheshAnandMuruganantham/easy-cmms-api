import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutMachinesInput } from './block-create-without-machines.input';

@InputType()
export class BlockCreateOrConnectWithoutMachinesInput {
  @Field(() => BlockWhereUniqueInput, { nullable: false })
  @Type(() => BlockWhereUniqueInput)
  where!: BlockWhereUniqueInput;

  @Field(() => BlockCreateWithoutMachinesInput, { nullable: false })
  @Type(() => BlockCreateWithoutMachinesInput)
  create!: BlockCreateWithoutMachinesInput;
}
