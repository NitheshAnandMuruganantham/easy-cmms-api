import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class Machines_itemsMinAggregate {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    machine_id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    item_id?: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:true})
    block_id?: bigint | number;
}
