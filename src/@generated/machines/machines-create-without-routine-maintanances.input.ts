import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { BlockCreateNestedOneWithoutMachinesInput } from '../block/block-create-nested-one-without-machines.input';
import { HideField } from '@nestjs/graphql';
import { SectionsCreateNestedOneWithoutMachinesInput } from '../sections/sections-create-nested-one-without-machines.input';
import { MaintenanceCreateNestedManyWithoutMachinesInput } from '../maintenance/maintenance-create-nested-many-without-machines.input';
import { TicketCreateNestedManyWithoutMachinesInput } from '../ticket/ticket-create-nested-many-without-machines.input';
import { machine_catagoryCreateNestedOneWithoutMachinesInput } from '../machine-catagory/machine-catagory-create-nested-one-without-machines.input';

@InputType()
export class MachinesCreateWithoutRoutine_maintanancesInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

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

    @HideField()
    block!: BlockCreateNestedOneWithoutMachinesInput;

    @Field(() => SectionsCreateNestedOneWithoutMachinesInput, {nullable:false})
    section!: SectionsCreateNestedOneWithoutMachinesInput;

    @Field(() => MaintenanceCreateNestedManyWithoutMachinesInput, {nullable:true})
    maintenance?: MaintenanceCreateNestedManyWithoutMachinesInput;

    @Field(() => TicketCreateNestedManyWithoutMachinesInput, {nullable:true})
    Ticket?: TicketCreateNestedManyWithoutMachinesInput;

    @Field(() => machine_catagoryCreateNestedOneWithoutMachinesInput, {nullable:false})
    machine_catagory!: machine_catagoryCreateNestedOneWithoutMachinesInput;
}
