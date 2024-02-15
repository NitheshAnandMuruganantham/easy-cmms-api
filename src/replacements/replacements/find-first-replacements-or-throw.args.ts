import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplacementsWhereInput } from './replacements-where.input';
import { Type } from 'class-transformer';
import { ReplacementsOrderByWithRelationAndSearchRelevanceInput } from './replacements-order-by-with-relation-and-search-relevance.input';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReplacementsScalarFieldEnum } from './replacements-scalar-field.enum';

@ArgsType()
export class FindFirstReplacementsOrThrowArgs {

    @Field(() => ReplacementsWhereInput, {nullable:true})
    @Type(() => ReplacementsWhereInput)
    where?: ReplacementsWhereInput;

    @Field(() => [ReplacementsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ReplacementsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ReplacementsWhereUniqueInput, {nullable:true})
    cursor?: ReplacementsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReplacementsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReplacementsScalarFieldEnum>;
}
