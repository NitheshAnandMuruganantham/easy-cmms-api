import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutMachine_catagoryInput } from './machines-update-without-machine-catagory.input';
import { MachinesCreateWithoutMachine_catagoryInput } from './machines-create-without-machine-catagory.input';

@InputType()
export class MachinesUpsertWithWhereUniqueWithoutMachine_catagoryInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesUpdateWithoutMachine_catagoryInput, { nullable: false })
  @Type(() => MachinesUpdateWithoutMachine_catagoryInput)
  update!: MachinesUpdateWithoutMachine_catagoryInput;

  @Field(() => MachinesCreateWithoutMachine_catagoryInput, { nullable: false })
  @Type(() => MachinesCreateWithoutMachine_catagoryInput)
  create!: MachinesCreateWithoutMachine_catagoryInput;
}
