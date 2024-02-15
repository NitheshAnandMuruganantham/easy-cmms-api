import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersUpdateWithoutRoutine_maintanancesInput } from './users-update-without-routine-maintanances.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutRoutine_maintanancesInput } from './users-create-without-routine-maintanances.input';

@InputType()
export class UsersUpsertWithoutRoutine_maintanancesInput {

    @Field(() => UsersUpdateWithoutRoutine_maintanancesInput, {nullable:false})
    @Type(() => UsersUpdateWithoutRoutine_maintanancesInput)
    update!: UsersUpdateWithoutRoutine_maintanancesInput;

    @Field(() => UsersCreateWithoutRoutine_maintanancesInput, {nullable:false})
    @Type(() => UsersCreateWithoutRoutine_maintanancesInput)
    create!: UsersCreateWithoutRoutine_maintanancesInput;
}
