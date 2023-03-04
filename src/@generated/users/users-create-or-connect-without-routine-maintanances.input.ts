import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutRoutine_maintanancesInput } from './users-create-without-routine-maintanances.input';

@InputType()
export class UsersCreateOrConnectWithoutRoutine_maintanancesInput {

    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: UsersWhereUniqueInput;

    @Field(() => UsersCreateWithoutRoutine_maintanancesInput, {nullable:false})
    @Type(() => UsersCreateWithoutRoutine_maintanancesInput)
    create!: UsersCreateWithoutRoutine_maintanancesInput;
}
