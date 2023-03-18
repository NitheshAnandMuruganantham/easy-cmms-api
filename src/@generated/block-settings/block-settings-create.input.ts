import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { BlockCreateNestedOneWithoutBlock_settingsInput } from '../block/block-create-nested-one-without-block-settings.input';

@InputType()
export class block_settingsCreateInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => BlockCreateNestedOneWithoutBlock_settingsInput, {nullable:false})
    block!: BlockCreateNestedOneWithoutBlock_settingsInput;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
