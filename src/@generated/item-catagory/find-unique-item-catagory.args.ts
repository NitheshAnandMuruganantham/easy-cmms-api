import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCatagoryWhereUniqueInput } from './item-catagory-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueItemCatagoryArgs {

    @Field(() => ItemCatagoryWhereUniqueInput, {nullable:false})
    @Type(() => ItemCatagoryWhereUniqueInput)
    where!: ItemCatagoryWhereUniqueInput;
}
