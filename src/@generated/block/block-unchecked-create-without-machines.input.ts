import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { UsersUncheckedCreateNestedManyWithoutBlockInput } from '../users/users-unchecked-create-nested-many-without-block.input';
import { block_settingsUncheckedCreateNestedManyWithoutBlockInput } from '../block-settings/block-settings-unchecked-create-nested-many-without-block.input';

@InputType()
export class BlockUncheckedCreateWithoutMachinesInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UsersUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    Users?: UsersUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => block_settingsUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    block_settings?: block_settingsUncheckedCreateNestedManyWithoutBlockInput;
}
