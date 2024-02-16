import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutBlockInput } from './users-create-without-block.input';

@InputType()
export class UsersCreateOrConnectWithoutBlockInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput;

  @Field(() => UsersCreateWithoutBlockInput, { nullable: false })
  @Type(() => UsersCreateWithoutBlockInput)
  create!: UsersCreateWithoutBlockInput;
}
