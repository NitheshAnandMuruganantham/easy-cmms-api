import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCatagoryWhereUniqueInput } from './item-catagory-where-unique.input';
import { Type } from 'class-transformer';
import { ItemCatagoryCreateInput } from './item-catagory-create.input';
import { ItemCatagoryUpdateInput } from './item-catagory-update.input';

@ArgsType()
export class UpsertOneItemCatagoryArgs {

    @Field(() => ItemCatagoryWhereUniqueInput, {nullable:false})
    @Type(() => ItemCatagoryWhereUniqueInput)
    where!: ItemCatagoryWhereUniqueInput;

    @Field(() => ItemCatagoryCreateInput, {nullable:false})
    @Type(() => ItemCatagoryCreateInput)
    create!: ItemCatagoryCreateInput;

    @Field(() => ItemCatagoryUpdateInput, {nullable:false})
    @Type(() => ItemCatagoryUpdateInput)
    update!: ItemCatagoryUpdateInput;
}
