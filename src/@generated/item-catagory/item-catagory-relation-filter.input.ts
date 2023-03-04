import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCatagoryWhereInput } from './item-catagory-where.input';

@InputType()
export class ItemCatagoryRelationFilter {

    @Field(() => ItemCatagoryWhereInput, {nullable:true})
    is?: ItemCatagoryWhereInput;

    @Field(() => ItemCatagoryWhereInput, {nullable:true})
    isNot?: ItemCatagoryWhereInput;
}
