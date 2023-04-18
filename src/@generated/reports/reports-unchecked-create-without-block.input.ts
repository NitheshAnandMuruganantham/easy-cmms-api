import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ReportsUncheckedCreateWithoutBlockInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    report!: string;

    @Field(() => String, {nullable:false})
    sign!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    tag!: any;

    @Field(() => GraphQLBigInt, {nullable:false})
    validated!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    validated_sign!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    maintance_id!: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
