import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { BlockCreateNestedOneWithoutProduction_dataInput } from '../block/block-create-nested-one-without-production-data.input';

@InputType()
export class production_dataCreateWithoutUpdatedByInput {

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

    @Field(() => BlockCreateNestedOneWithoutProduction_dataInput, {nullable:true})
    Block?: BlockCreateNestedOneWithoutProduction_dataInput;
}
