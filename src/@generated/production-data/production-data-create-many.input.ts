import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class production_dataCreateManyInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;

    @Field(() => Date, {nullable:false})
    from!: Date | string;

    @Field(() => Date, {nullable:false})
    to!: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => GraphQLBigInt, {nullable:false})
    updated_by!: bigint | number;
}
