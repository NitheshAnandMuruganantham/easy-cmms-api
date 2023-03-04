import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { routine_maintanancesWhereInput } from '../routine-maintanances/routine-maintanances-where.input';
import { Type } from 'class-transformer';
import { routine_maintanancesOrderByWithAggregationInput } from '../routine-maintanances/routine-maintanances-order-by-with-aggregation.input';
import { Routine_maintanancesScalarFieldEnum } from './routine-maintanances-scalar-field.enum';
import { routine_maintanancesScalarWhereWithAggregatesInput } from '../routine-maintanances/routine-maintanances-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByroutineMaintanancesArgs {

    @Field(() => routine_maintanancesWhereInput, {nullable:true})
    @Type(() => routine_maintanancesWhereInput)
    where?: routine_maintanancesWhereInput;

    @Field(() => [routine_maintanancesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<routine_maintanancesOrderByWithAggregationInput>;

    @Field(() => [Routine_maintanancesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Routine_maintanancesScalarFieldEnum>;

    @Field(() => routine_maintanancesScalarWhereWithAggregatesInput, {nullable:true})
    having?: routine_maintanancesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
