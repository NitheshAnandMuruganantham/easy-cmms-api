import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionsWhereInput } from './sections-where.input';
import { Type } from 'class-transformer';
import { SectionsOrderByWithRelationAndSearchRelevanceInput } from './sections-order-by-with-relation-and-search-relevance.input';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SectionsScalarFieldEnum } from './sections-scalar-field.enum';

@ArgsType()
export class FindFirstSectionsOrThrowArgs {

    @Field(() => SectionsWhereInput, {nullable:true})
    @Type(() => SectionsWhereInput)
    where?: SectionsWhereInput;

    @Field(() => [SectionsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<SectionsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => SectionsWhereUniqueInput, {nullable:true})
    cursor?: SectionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SectionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SectionsScalarFieldEnum>;
}
