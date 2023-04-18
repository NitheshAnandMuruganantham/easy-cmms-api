import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MaintenanceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    photo!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    from!: number;

    @Field(() => Int, {nullable:false})
    to!: number;

    @Field(() => Int, {nullable:false})
    resolved!: number;

    @Field(() => Int, {nullable:false})
    metadata!: number;

    @Field(() => Int, {nullable:false})
    un_planned!: number;

    @Field(() => Int, {nullable:false})
    elapsed!: number;

    @Field(() => Int, {nullable:false})
    assignee_id!: number;

    @Field(() => Int, {nullable:false})
    machine_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    block_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
