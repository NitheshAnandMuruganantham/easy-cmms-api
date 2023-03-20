import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Machines } from '../machines/machines.model';
import { Machine_catagoryCount } from '../prisma/machine-catagory-count.output';

@ObjectType()
export class machine_catagory {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [Machines], {nullable:true})
    machines?: Array<Machines>;

    @Field(() => Machine_catagoryCount, {nullable:false})
    _count?: Machine_catagoryCount;
}
