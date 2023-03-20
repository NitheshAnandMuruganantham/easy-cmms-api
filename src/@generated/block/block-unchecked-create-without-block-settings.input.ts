import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { BlockCreateMailingsInput } from './block-create-mailings.input';
import { MachinesUncheckedCreateNestedManyWithoutBlockInput } from '../machines/machines-unchecked-create-nested-many-without-block.input';
import { UsersUncheckedCreateNestedManyWithoutBlockInput } from '../users/users-unchecked-create-nested-many-without-block.input';
import { production_dataUncheckedCreateNestedManyWithoutBlockInput } from '../production-data/production-data-unchecked-create-nested-many-without-block.input';

@InputType()
export class BlockUncheckedCreateWithoutBlock_settingsInput {

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

    @Field(() => MachinesUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    machines?: MachinesUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => UsersUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    Users?: UsersUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => production_dataUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    production_data?: production_dataUncheckedCreateNestedManyWithoutBlockInput;
}
