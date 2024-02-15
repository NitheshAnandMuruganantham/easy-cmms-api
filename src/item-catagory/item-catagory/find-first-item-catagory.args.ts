import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCatagoryWhereInput } from './item-catagory-where.input';
import { Type } from 'class-transformer';
import { ItemCatagoryOrderByWithRelationInput } from './item-catagory-order-by-with-relation.input';
import { ItemCatagoryWhereUniqueInput } from './item-catagory-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemCatagoryScalarFieldEnum } from './item-catagory-scalar-field.enum';

@ArgsType()
export class FindFirstItemCatagoryArgs {

    @Field(() => ItemCatagoryWhereInput, {nullable:true})
    @Type(() => ItemCatagoryWhereInput)
    where?: ItemCatagoryWhereInput;

    @Field(() => [ItemCatagoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemCatagoryOrderByWithRelationInput>;

    @Field(() => ItemCatagoryWhereUniqueInput, {nullable:true})
    cursor?: ItemCatagoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemCatagoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ItemCatagoryScalarFieldEnum>;
}
