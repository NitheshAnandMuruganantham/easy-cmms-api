import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Machines } from '../machines/machines.model';
import { SectionsCount } from './sections-count.output';

@ObjectType()
export class Sections {

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

    @Field(() => SectionsCount, {nullable:false})
    _count?: SectionsCount;
}
