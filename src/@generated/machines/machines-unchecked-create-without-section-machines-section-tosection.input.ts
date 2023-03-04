import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { MaintenanceUncheckedCreateNestedManyWithoutMachinesInput } from '../maintenance/maintenance-unchecked-create-nested-many-without-machines.input';

@InputType()
export class MachinesUncheckedCreateWithoutSection_machines_sectionTosectionInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLBigInt, {nullable:false})
    block_id!: bigint | number;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    profile?: any;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => MaintenanceUncheckedCreateNestedManyWithoutMachinesInput, {nullable:true})
    maintenance?: MaintenanceUncheckedCreateNestedManyWithoutMachinesInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
