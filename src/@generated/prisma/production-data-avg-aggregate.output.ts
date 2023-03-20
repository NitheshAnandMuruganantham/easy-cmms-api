import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Production_dataAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    total_run_time?: number;

    @Field(() => Float, {nullable:true})
    total_down_time?: number;

    @Field(() => Float, {nullable:true})
    target_production?: number;

    @Field(() => Float, {nullable:true})
    actual_production?: number;

    @Field(() => Float, {nullable:true})
    updated_by?: number;

    @Field(() => Float, {nullable:true})
    blockId?: number;
}
