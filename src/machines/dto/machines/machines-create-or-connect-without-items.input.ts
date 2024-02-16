import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutItemsInput } from './machines-create-without-items.input';

@InputType()
export class MachinesCreateOrConnectWithoutItemsInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesCreateWithoutItemsInput, { nullable: false })
  @Type(() => MachinesCreateWithoutItemsInput)
  create!: MachinesCreateWithoutItemsInput;
}
