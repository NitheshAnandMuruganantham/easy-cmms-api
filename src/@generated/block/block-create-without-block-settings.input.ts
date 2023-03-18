import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { MachinesCreateNestedManyWithoutBlockInput } from '../machines/machines-create-nested-many-without-block.input';
import { UsersCreateNestedManyWithoutBlockInput } from '../users/users-create-nested-many-without-block.input';

@InputType()
export class BlockCreateWithoutBlock_settingsInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => MachinesCreateNestedManyWithoutBlockInput, {nullable:true})
    machines?: MachinesCreateNestedManyWithoutBlockInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UsersCreateNestedManyWithoutBlockInput, {nullable:true})
    Users?: UsersCreateNestedManyWithoutBlockInput;
}
