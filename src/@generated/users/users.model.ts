import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLBigInt } from 'graphql-scalars';
import { Block } from '../block/block.model';
import { Maintenance } from '../maintenance/maintenance.model';
import { Role } from '../prisma/role.enum';
import { Ticket } from '../ticket/ticket.model';
import { routine_maintanances } from '../routine-maintanances/routine-maintanances.model';
import { production_data } from '../production-data/production-data.model';
import { UsersCount } from './users-count.output';

@ObjectType()
export class Users {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    id!: bigint;

    @Field(() => GraphQLJSON, {nullable:false,defaultValue:'{}'})
    profile!: any;

    @Field(() => String, {nullable:false})
    phone!: string;

    /**
     * @DtoCreateHidden
     * @DtoUpdateHidden
     */
    @Field(() => String, {nullable:true,description:'@DtoCreateHidden\n@DtoUpdateHidden'})
    user_auth_id!: string | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLBigInt, {nullable:false})
    blockId!: bigint;

    @Field(() => Block, {nullable:false})
    block?: Block;

    @Field(() => [Maintenance], {nullable:true})
    maintenance?: Array<Maintenance>;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => [Role], {nullable:true})
    extra_roles!: Array<keyof typeof Role>;

    @Field(() => String, {nullable:false,defaultValue:'user'})
    role_alias!: string;

    @Field(() => [Ticket], {nullable:true})
    ticket?: Array<Ticket>;

    @Field(() => [routine_maintanances], {nullable:true})
    routine_maintanances?: Array<routine_maintanances>;

    @Field(() => [production_data], {nullable:true})
    production_data?: Array<production_data>;

    @Field(() => UsersCount, {nullable:false})
    _count?: UsersCount;
}
