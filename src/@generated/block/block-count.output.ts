import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BlockCount {

    @Field(() => Int, {nullable:false})
    machines?: number;

    @Field(() => Int, {nullable:false})
    Users?: number;

    @Field(() => Int, {nullable:false})
    block_settings?: number;

    @Field(() => Int, {nullable:false})
    production_data?: number;
}
