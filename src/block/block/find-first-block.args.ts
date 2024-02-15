import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlockWhereInput } from './block-where.input';
import { Type } from 'class-transformer';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from './block-order-by-with-relation-and-search-relevance.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlockScalarFieldEnum } from './block-scalar-field.enum';

@ArgsType()
export class FindFirstBlockArgs {

    @Field(() => BlockWhereInput, {nullable:true})
    @Type(() => BlockWhereInput)
    where?: BlockWhereInput;

    @Field(() => [BlockOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BlockOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    cursor?: BlockWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BlockScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BlockScalarFieldEnum>;
}
