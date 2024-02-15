import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutProduction_dataInput } from './users-create-without-production-data.input';

@InputType()
export class UsersCreateOrConnectWithoutProduction_dataInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput;

  @Field(() => UsersCreateWithoutProduction_dataInput, { nullable: false })
  @Type(() => UsersCreateWithoutProduction_dataInput)
  create!: UsersCreateWithoutProduction_dataInput;
}
