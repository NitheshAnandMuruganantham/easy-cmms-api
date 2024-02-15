import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Machines_itemsAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    machine_id?: number;

    @Field(() => Float, {nullable:true})
    item_id?: number;

    @Field(() => Float, {nullable:true})
    block_id?: number;
}
