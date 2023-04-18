import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machines_itemsWhereInput } from '../machines-items/machines-items-where.input';
import { Type } from 'class-transformer';
import { machines_itemsOrderByWithRelationAndSearchRelevanceInput } from '../machines-items/machines-items-order-by-with-relation-and-search-relevance.input';
import { machines_itemsWhereUniqueInput } from '../machines-items/machines-items-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Machines_itemsScalarFieldEnum } from '../machines/machines-items-scalar-field.enum';

@ArgsType()
export class FindFirstmachinesItemsArgs {

    @Field(() => machines_itemsWhereInput, {nullable:true})
    @Type(() => machines_itemsWhereInput)
    where?: machines_itemsWhereInput;

    @Field(() => [machines_itemsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<machines_itemsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => machines_itemsWhereUniqueInput, {nullable:true})
    cursor?: machines_itemsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Machines_itemsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Machines_itemsScalarFieldEnum>;
}
