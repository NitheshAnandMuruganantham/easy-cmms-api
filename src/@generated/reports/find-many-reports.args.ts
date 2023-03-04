import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportsWhereInput } from './reports-where.input';
import { Type } from 'class-transformer';
import { ReportsOrderByWithRelationAndSearchRelevanceInput } from './reports-order-by-with-relation-and-search-relevance.input';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReportsScalarFieldEnum } from './reports-scalar-field.enum';

@ArgsType()
export class FindManyReportsArgs {

    @Field(() => ReportsWhereInput, {nullable:true})
    @Type(() => ReportsWhereInput)
    where?: ReportsWhereInput;

    @Field(() => [ReportsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ReportsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ReportsWhereUniqueInput, {nullable:true})
    cursor?: ReportsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReportsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReportsScalarFieldEnum>;
}
