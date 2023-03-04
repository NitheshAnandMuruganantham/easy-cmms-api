import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCatagoryWhereInput } from './item-catagory-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyItemCatagoryArgs {

    @Field(() => ItemCatagoryWhereInput, {nullable:true})
    @Type(() => ItemCatagoryWhereInput)
    where?: ItemCatagoryWhereInput;
}
