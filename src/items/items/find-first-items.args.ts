import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsOrderByWithRelationAndSearchRelevanceInput } from './items-order-by-with-relation-and-search-relevance.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemsScalarFieldEnum } from './items-scalar-field.enum';

@ArgsType()
export class FindFirstItemsArgs {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;

    @Field(() => [ItemsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ItemsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    cursor?: ItemsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ItemsScalarFieldEnum>;
}
