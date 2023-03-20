import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Items } from '../items/items.model';
import { CatagoryCount } from '../prisma/catagory-count.output';

@ObjectType()
export class catagory {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [Items], {nullable:true})
    items?: Array<Items>;

    @Field(() => CatagoryCount, {nullable:false})
    _count?: CatagoryCount;
}
