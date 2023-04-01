import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { UsersCreateNestedOneWithoutProduction_dataInput } from '../users/users-create-nested-one-without-production-data.input';

@InputType()
export class production_dataCreateWithoutBlockInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => GraphQLJSON, {nullable:true})
    production?: any;

    @Field(() => String, {nullable:false})
    shift!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UsersCreateNestedOneWithoutProduction_dataInput, {nullable:false})
    updatedBy!: UsersCreateNestedOneWithoutProduction_dataInput;
}
