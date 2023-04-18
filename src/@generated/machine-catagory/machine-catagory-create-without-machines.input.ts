import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { BlockCreateNestedOneWithoutMachine_catagoryInput } from '../block/block-create-nested-one-without-machine-catagory.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class machine_catagoryCreateWithoutMachinesInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @HideField()
    block!: BlockCreateNestedOneWithoutMachine_catagoryInput;
}
