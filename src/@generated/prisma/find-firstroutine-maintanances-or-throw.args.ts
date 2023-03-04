import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { routine_maintanancesWhereInput } from '../routine-maintanances/routine-maintanances-where.input';
import { Type } from 'class-transformer';
import { routine_maintanancesOrderByWithRelationAndSearchRelevanceInput } from '../routine-maintanances/routine-maintanances-order-by-with-relation-and-search-relevance.input';
import { routine_maintanancesWhereUniqueInput } from '../routine-maintanances/routine-maintanances-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Routine_maintanancesScalarFieldEnum } from './routine-maintanances-scalar-field.enum';

@ArgsType()
export class FindFirstroutineMaintanancesOrThrowArgs {

    @Field(() => routine_maintanancesWhereInput, {nullable:true})
    @Type(() => routine_maintanancesWhereInput)
    where?: routine_maintanancesWhereInput;

    @Field(() => [routine_maintanancesOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<routine_maintanancesOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => routine_maintanancesWhereUniqueInput, {nullable:true})
    cursor?: routine_maintanancesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Routine_maintanancesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Routine_maintanancesScalarFieldEnum>;
}
