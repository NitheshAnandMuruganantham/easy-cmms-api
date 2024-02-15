import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutProduction_dataInput } from './users-create-without-production-data.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutProduction_dataInput } from './users-create-or-connect-without-production-data.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutProduction_dataInput {
  @Field(() => UsersCreateWithoutProduction_dataInput, { nullable: true })
  @Type(() => UsersCreateWithoutProduction_dataInput)
  create?: UsersCreateWithoutProduction_dataInput;

  @Field(() => UsersCreateOrConnectWithoutProduction_dataInput, {
    nullable: true,
  })
  @Type(() => UsersCreateOrConnectWithoutProduction_dataInput)
  connectOrCreate?: UsersCreateOrConnectWithoutProduction_dataInput;

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: UsersWhereUniqueInput;
}
