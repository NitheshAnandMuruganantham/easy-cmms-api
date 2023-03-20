import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Machines } from '../machines/machines.model';
import { Users } from '../users/users.model';
import { block_settings } from '../block-settings/block-settings.model';
import { production_data } from '../production-data/production-data.model';
import { BlockCount } from './block-count.output';

@ObjectType()
export class Block {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => [Machines], {nullable:true})
    machines?: Array<Machines>;

    @Field(() => [String], {nullable:true})
    Mailings!: Array<string>;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [Users], {nullable:true})
    Users?: Array<Users>;

    @Field(() => [block_settings], {nullable:true})
    block_settings?: Array<block_settings>;

    @Field(() => [production_data], {nullable:true})
    production_data?: Array<production_data>;

    @Field(() => BlockCount, {nullable:false})
    _count?: BlockCount;
}
