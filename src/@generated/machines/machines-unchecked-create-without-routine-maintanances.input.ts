import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { MaintenanceUncheckedCreateNestedManyWithoutMachinesInput } from '../maintenance/maintenance-unchecked-create-nested-many-without-machines.input';
import { TicketUncheckedCreateNestedManyWithoutMachinesInput } from '../ticket/ticket-unchecked-create-nested-many-without-machines.input';
import { machines_itemsUncheckedCreateNestedManyWithoutMachineInput } from '../machines-items/machines-items-unchecked-create-nested-many-without-machine.input';

@InputType()
export class MachinesUncheckedCreateWithoutRoutine_maintanancesInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLBigInt, {nullable:false})
    section_id!: bigint | number;

    @HideField()
    block_id!: bigint | number;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    profile?: any;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => GraphQLBigInt, {nullable:false})
    machine_catagory_id!: bigint | number;

    @Field(() => MaintenanceUncheckedCreateNestedManyWithoutMachinesInput, {nullable:true})
    maintenance?: MaintenanceUncheckedCreateNestedManyWithoutMachinesInput;

    @Field(() => TicketUncheckedCreateNestedManyWithoutMachinesInput, {nullable:true})
    Ticket?: TicketUncheckedCreateNestedManyWithoutMachinesInput;

    @Field(() => machines_itemsUncheckedCreateNestedManyWithoutMachineInput, {nullable:true})
    machines_items?: machines_itemsUncheckedCreateNestedManyWithoutMachineInput;
}
