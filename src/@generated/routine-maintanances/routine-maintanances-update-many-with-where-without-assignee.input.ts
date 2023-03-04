import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesScalarWhereInput } from './routine-maintanances-scalar-where.input';
import { Type } from 'class-transformer';
import { routine_maintanancesUpdateManyMutationInput } from './routine-maintanances-update-many-mutation.input';

@InputType()
export class routine_maintanancesUpdateManyWithWhereWithoutAssigneeInput {

    @Field(() => routine_maintanancesScalarWhereInput, {nullable:false})
    @Type(() => routine_maintanancesScalarWhereInput)
    where!: routine_maintanancesScalarWhereInput;

    @Field(() => routine_maintanancesUpdateManyMutationInput, {nullable:false})
    @Type(() => routine_maintanancesUpdateManyMutationInput)
    data!: routine_maintanancesUpdateManyMutationInput;
}
