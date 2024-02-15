import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutProduction_dataInput } from './users-create-without-production-data.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutProduction_dataInput } from './users-create-or-connect-without-production-data.input';
import { UsersUpsertWithoutProduction_dataInput } from './users-upsert-without-production-data.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateWithoutProduction_dataInput } from './users-update-without-production-data.input';

@InputType()
export class UsersUpdateOneRequiredWithoutProduction_dataNestedInput {
  @Field(() => UsersCreateWithoutProduction_dataInput, { nullable: true })
  @Type(() => UsersCreateWithoutProduction_dataInput)
  create?: UsersCreateWithoutProduction_dataInput;

  @Field(() => UsersCreateOrConnectWithoutProduction_dataInput, {
    nullable: true,
  })
  @Type(() => UsersCreateOrConnectWithoutProduction_dataInput)
  connectOrCreate?: UsersCreateOrConnectWithoutProduction_dataInput;

  @Field(() => UsersUpsertWithoutProduction_dataInput, { nullable: true })
  @Type(() => UsersUpsertWithoutProduction_dataInput)
  upsert?: UsersUpsertWithoutProduction_dataInput;

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: UsersWhereUniqueInput;

  @Field(() => UsersUpdateWithoutProduction_dataInput, { nullable: true })
  @Type(() => UsersUpdateWithoutProduction_dataInput)
  update?: UsersUpdateWithoutProduction_dataInput;
}
