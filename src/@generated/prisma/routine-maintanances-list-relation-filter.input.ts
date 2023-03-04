import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesWhereInput } from '../routine-maintanances/routine-maintanances-where.input';

@InputType()
export class Routine_maintanancesListRelationFilter {

    @Field(() => routine_maintanancesWhereInput, {nullable:true})
    every?: routine_maintanancesWhereInput;

    @Field(() => routine_maintanancesWhereInput, {nullable:true})
    some?: routine_maintanancesWhereInput;

    @Field(() => routine_maintanancesWhereInput, {nullable:true})
    none?: routine_maintanancesWhereInput;
}
