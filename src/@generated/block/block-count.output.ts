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

    @Field(() => Int, {nullable:false})
    catagory?: number;

    @Field(() => Int, {nullable:false})
    Items?: number;

    @Field(() => Int, {nullable:false})
    machine_catagory?: number;

    @Field(() => Int, {nullable:false})
    Maintenance?: number;

    @Field(() => Int, {nullable:false})
    Replacements?: number;

    @Field(() => Int, {nullable:false})
    Reports?: number;

    @Field(() => Int, {nullable:false})
    Sections?: number;

    @Field(() => Int, {nullable:false})
    Ticket?: number;

    @Field(() => Int, {nullable:false})
    routine_maintanances?: number;

    @Field(() => Int, {nullable:false})
    Invoices?: number;

    @Field(() => Int, {nullable:false})
    invoice_items?: number;
}
