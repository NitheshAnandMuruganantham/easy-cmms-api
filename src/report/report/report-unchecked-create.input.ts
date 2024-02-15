import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ReportUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    sign!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    tag!: any;

    @Field(() => String, {nullable:false})
    validated!: bigint | number;

    @Field(() => String, {nullable:false})
    validated_sign!: bigint | number;

    @Field(() => String, {nullable:false})
    maintance_id!: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
