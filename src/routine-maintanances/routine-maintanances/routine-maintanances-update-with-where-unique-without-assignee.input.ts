import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';
import { routine_maintanancesUpdateWithoutAssigneeInput } from './routine-maintanances-update-without-assignee.input';

@InputType()
export class routine_maintanancesUpdateWithWhereUniqueWithoutAssigneeInput {

    @Field(() => routine_maintanancesWhereUniqueInput, {nullable:false})
    @Type(() => routine_maintanancesWhereUniqueInput)
    where!: routine_maintanancesWhereUniqueInput;

    @Field(() => routine_maintanancesUpdateWithoutAssigneeInput, {nullable:false})
    @Type(() => routine_maintanancesUpdateWithoutAssigneeInput)
    data!: routine_maintanancesUpdateWithoutAssigneeInput;
}
