import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateNestedManyWithoutItemCatagoryInput } from '../items/items-create-nested-many-without-item-catagory.input';

@InputType()
export class ItemCatagoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ItemsCreateNestedManyWithoutItemCatagoryInput, {nullable:true})
    items?: ItemsCreateNestedManyWithoutItemCatagoryInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
