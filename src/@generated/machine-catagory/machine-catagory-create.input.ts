import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { MachinesCreateNestedManyWithoutMachine_catagoryInput } from '../machines/machines-create-nested-many-without-machine-catagory.input';
import { BlockCreateNestedOneWithoutMachine_catagoryInput } from '../block/block-create-nested-one-without-machine-catagory.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machine_catagoryCreateInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => MachinesCreateNestedManyWithoutMachine_catagoryInput, {nullable:true})
    machines?: MachinesCreateNestedManyWithoutMachine_catagoryInput;

    @HideField()
    block!: BlockCreateNestedOneWithoutMachine_catagoryInput;
}
