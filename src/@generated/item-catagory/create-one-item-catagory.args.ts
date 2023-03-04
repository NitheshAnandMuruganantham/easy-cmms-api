import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCatagoryCreateInput } from './item-catagory-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemCatagoryArgs {

    @Field(() => ItemCatagoryCreateInput, {nullable:false})
    @Type(() => ItemCatagoryCreateInput)
    data!: ItemCatagoryCreateInput;
}
