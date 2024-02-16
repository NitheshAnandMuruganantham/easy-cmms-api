import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutRoutine_maintanancesInput } from './users-create-without-routine-maintanances.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutRoutine_maintanancesInput } from './users-create-or-connect-without-routine-maintanances.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutRoutine_maintanancesInput {
  @Field(() => UsersCreateWithoutRoutine_maintanancesInput, { nullable: true })
  @Type(() => UsersCreateWithoutRoutine_maintanancesInput)
  create?: UsersCreateWithoutRoutine_maintanancesInput;

  @Field(() => UsersCreateOrConnectWithoutRoutine_maintanancesInput, {
    nullable: true,
  })
  @Type(() => UsersCreateOrConnectWithoutRoutine_maintanancesInput)
  connectOrCreate?: UsersCreateOrConnectWithoutRoutine_maintanancesInput;

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: UsersWhereUniqueInput;
}
