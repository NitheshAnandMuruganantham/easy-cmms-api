import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';
import { routine_maintanancesCreateWithoutAssigneeInput } from './routine-maintanances-create-without-assignee.input';

@InputType()
export class routine_maintanancesCreateOrConnectWithoutAssigneeInput {

    @Field(() => routine_maintanancesWhereUniqueInput, {nullable:false})
    @Type(() => routine_maintanancesWhereUniqueInput)
    where!: routine_maintanancesWhereUniqueInput;

    @Field(() => routine_maintanancesCreateWithoutAssigneeInput, {nullable:false})
    @Type(() => routine_maintanancesCreateWithoutAssigneeInput)
    create!: routine_maintanancesCreateWithoutAssigneeInput;
}
