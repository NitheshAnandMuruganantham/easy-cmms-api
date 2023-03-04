import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { ItemsCreateNestedManyWithoutCatagoryInput } from '../items/items-create-nested-many-without-catagory.input';

@InputType()
export class catagoryCreateInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ItemsCreateNestedManyWithoutCatagoryInput, {nullable:true})
    items?: ItemsCreateNestedManyWithoutCatagoryInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
