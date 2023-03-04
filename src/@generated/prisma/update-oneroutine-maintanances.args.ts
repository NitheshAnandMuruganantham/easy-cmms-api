import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { routine_maintanancesUpdateInput } from '../routine-maintanances/routine-maintanances-update.input';
import { Type } from 'class-transformer';
import { routine_maintanancesWhereUniqueInput } from '../routine-maintanances/routine-maintanances-where-unique.input';

@ArgsType()
export class UpdateOneroutineMaintanancesArgs {

    @Field(() => routine_maintanancesUpdateInput, {nullable:false})
    @Type(() => routine_maintanancesUpdateInput)
    data!: routine_maintanancesUpdateInput;

    @Field(() => routine_maintanancesWhereUniqueInput, {nullable:false})
    @Type(() => routine_maintanancesWhereUniqueInput)
    where!: routine_maintanancesWhereUniqueInput;
}
