import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { UsersCreateNestedOneWithoutProduction_dataInput } from '../users/users-create-nested-one-without-production-data.input';
import { BlockCreateNestedOneWithoutProduction_dataInput } from '../block/block-create-nested-one-without-production-data.input';

@InputType()
export class production_dataCreateInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => Int, {nullable:true})
    total_run_time?: number;

    @Field(() => Int, {nullable:true})
    total_down_time?: number;

    @Field(() => Int, {nullable:true})
    target_production?: number;

    @Field(() => Int, {nullable:true})
    actual_production?: number;

    @Field(() => Date, {nullable:false})
    from!: Date | string;

    @Field(() => Date, {nullable:false})
    to!: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UsersCreateNestedOneWithoutProduction_dataInput, {nullable:false})
    updatedBy!: UsersCreateNestedOneWithoutProduction_dataInput;

    @Field(() => BlockCreateNestedOneWithoutProduction_dataInput, {nullable:true})
    Block?: BlockCreateNestedOneWithoutProduction_dataInput;
}
