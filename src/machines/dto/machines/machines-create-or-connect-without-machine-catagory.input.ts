import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutMachine_catagoryInput } from './machines-create-without-machine-catagory.input';

@InputType()
export class MachinesCreateOrConnectWithoutMachine_catagoryInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesCreateWithoutMachine_catagoryInput, { nullable: false })
  @Type(() => MachinesCreateWithoutMachine_catagoryInput)
  create!: MachinesCreateWithoutMachine_catagoryInput;
}
