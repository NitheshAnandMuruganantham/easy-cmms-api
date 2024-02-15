import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { MaintenanceUncheckedCreateNestedManyWithoutMachinesInput } from '../../maintanance/maintenance/maintenance-unchecked-create-nested-many-without-machines.input';
import { TicketUncheckedCreateNestedManyWithoutMachinesInput } from '../../ticket/ticket/ticket-unchecked-create-nested-many-without-machines.input';
import { routine_maintanancesUncheckedCreateNestedManyWithoutMeachineInput } from '../../routine-maintanances/routine-maintanances/routine-maintanances-unchecked-create-nested-many-without-meachine.input';

@InputType()
export class MachinesUncheckedCreateWithoutMachines_itemsInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => GraphQLBigInt, { nullable: false })
  section_id!: bigint | number;

  @HideField()
  block_id!: bigint | number;

  @Field(() => String, { nullable: false })
  label!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  profile?: any;

  @Field(() => Int, { nullable: false })
  priority!: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => GraphQLBigInt, { nullable: false })
  machine_catagory_id!: bigint | number;

  @Field(() => MaintenanceUncheckedCreateNestedManyWithoutMachinesInput, {
    nullable: true,
  })
  maintenance?: MaintenanceUncheckedCreateNestedManyWithoutMachinesInput;

  @Field(() => TicketUncheckedCreateNestedManyWithoutMachinesInput, {
    nullable: true,
  })
  Ticket?: TicketUncheckedCreateNestedManyWithoutMachinesInput;

  @Field(
    () => routine_maintanancesUncheckedCreateNestedManyWithoutMeachineInput,
    { nullable: true },
  )
  routine_maintanances?: routine_maintanancesUncheckedCreateNestedManyWithoutMeachineInput;
}
