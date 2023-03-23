import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { BlockCreateMailingsInput } from './block-create-mailings.input';
import { MachinesCreateNestedManyWithoutBlockInput } from '../machines/machines-create-nested-many-without-block.input';
import { UsersCreateNestedManyWithoutBlockInput } from '../users/users-create-nested-many-without-block.input';
import { block_settingsCreateNestedManyWithoutBlockInput } from '../block-settings/block-settings-create-nested-many-without-block.input';

@InputType()
export class BlockCreateWithoutProduction_dataInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => BlockCreateMailingsInput, {nullable:true})
    Mailings?: BlockCreateMailingsInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => MachinesCreateNestedManyWithoutBlockInput, {nullable:true})
    machines?: MachinesCreateNestedManyWithoutBlockInput;

    @Field(() => UsersCreateNestedManyWithoutBlockInput, {nullable:true})
    Users?: UsersCreateNestedManyWithoutBlockInput;

    @Field(() => block_settingsCreateNestedManyWithoutBlockInput, {nullable:true})
    block_settings?: block_settingsCreateNestedManyWithoutBlockInput;
}