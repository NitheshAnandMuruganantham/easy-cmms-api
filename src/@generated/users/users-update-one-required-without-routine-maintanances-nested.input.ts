import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutRoutine_maintanancesInput } from './users-create-without-routine-maintanances.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutRoutine_maintanancesInput } from './users-create-or-connect-without-routine-maintanances.input';
import { UsersUpsertWithoutRoutine_maintanancesInput } from './users-upsert-without-routine-maintanances.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateWithoutRoutine_maintanancesInput } from './users-update-without-routine-maintanances.input';

@InputType()
export class UsersUpdateOneRequiredWithoutRoutine_maintanancesNestedInput {

    @Field(() => UsersCreateWithoutRoutine_maintanancesInput, {nullable:true})
    @Type(() => UsersCreateWithoutRoutine_maintanancesInput)
    create?: UsersCreateWithoutRoutine_maintanancesInput;

    @Field(() => UsersCreateOrConnectWithoutRoutine_maintanancesInput, {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutRoutine_maintanancesInput)
    connectOrCreate?: UsersCreateOrConnectWithoutRoutine_maintanancesInput;

    @Field(() => UsersUpsertWithoutRoutine_maintanancesInput, {nullable:true})
    @Type(() => UsersUpsertWithoutRoutine_maintanancesInput)
    upsert?: UsersUpsertWithoutRoutine_maintanancesInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: UsersWhereUniqueInput;

    @Field(() => UsersUpdateWithoutRoutine_maintanancesInput, {nullable:true})
    @Type(() => UsersUpdateWithoutRoutine_maintanancesInput)
    update?: UsersUpdateWithoutRoutine_maintanancesInput;
}
