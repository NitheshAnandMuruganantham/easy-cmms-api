import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';

@InputType()
export class catagoryUncheckedCreateWithoutItemsInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @HideField()
    block_id!: bigint | number;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
