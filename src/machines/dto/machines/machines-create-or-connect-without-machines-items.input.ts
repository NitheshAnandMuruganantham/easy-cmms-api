import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutMachines_itemsInput } from './machines-create-without-machines-items.input';

@InputType()
export class MachinesCreateOrConnectWithoutMachines_itemsInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesCreateWithoutMachines_itemsInput, { nullable: false })
  @Type(() => MachinesCreateWithoutMachines_itemsInput)
  create!: MachinesCreateWithoutMachines_itemsInput;
}
