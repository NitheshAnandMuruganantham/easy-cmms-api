import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutMachinesInput } from './block-create-without-machines.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutMachinesInput } from './block-create-or-connect-without-machines.input';
import { BlockUpsertWithoutMachinesInput } from './block-upsert-without-machines.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutMachinesInput } from './block-update-without-machines.input';

@InputType()
export class BlockUpdateOneRequiredWithoutMachinesNestedInput {
  @Field(() => BlockCreateWithoutMachinesInput, { nullable: true })
  @Type(() => BlockCreateWithoutMachinesInput)
  create?: BlockCreateWithoutMachinesInput;

  @Field(() => BlockCreateOrConnectWithoutMachinesInput, { nullable: true })
  @Type(() => BlockCreateOrConnectWithoutMachinesInput)
  connectOrCreate?: BlockCreateOrConnectWithoutMachinesInput;

  @Field(() => BlockUpsertWithoutMachinesInput, { nullable: true })
  @Type(() => BlockUpsertWithoutMachinesInput)
  upsert?: BlockUpsertWithoutMachinesInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;

  @Field(() => BlockUpdateWithoutMachinesInput, { nullable: true })
  @Type(() => BlockUpdateWithoutMachinesInput)
  update?: BlockUpdateWithoutMachinesInput;
}
