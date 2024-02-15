import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class machines_itemsCreateManyBlockInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    machine_id!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    item_id!: bigint | number;
}
