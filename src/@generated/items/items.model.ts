import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { catagory } from '../catagory/catagory.model';
import { Replacements } from '../replacements/replacements.model';
import { ItemsCount } from './items-count.output';

@ObjectType()
export class Items {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Float, {nullable:false})
    unit_price!: number;

    @Field(() => GraphQLBigInt, {nullable:false})
    catagory_id!: bigint;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => catagory, {nullable:false})
    catagory?: catagory;

    @Field(() => [Replacements], {nullable:true})
    replacements?: Array<Replacements>;

    @Field(() => ItemsCount, {nullable:false})
    _count?: ItemsCount;
}
