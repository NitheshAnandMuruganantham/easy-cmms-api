import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesUpdateWithoutMachines_itemsInput } from './machines-update-without-machines-items.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutMachines_itemsInput } from './machines-create-without-machines-items.input';

@InputType()
export class MachinesUpsertWithoutMachines_itemsInput {
  @Field(() => MachinesUpdateWithoutMachines_itemsInput, { nullable: false })
  @Type(() => MachinesUpdateWithoutMachines_itemsInput)
  update!: MachinesUpdateWithoutMachines_itemsInput;

  @Field(() => MachinesCreateWithoutMachines_itemsInput, { nullable: false })
  @Type(() => MachinesCreateWithoutMachines_itemsInput)
  create!: MachinesCreateWithoutMachines_itemsInput;
}
