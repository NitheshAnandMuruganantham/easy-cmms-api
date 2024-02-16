import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersUpdateWithoutBlockInput } from './users-update-without-block.input';

@InputType()
export class UsersUpdateWithWhereUniqueWithoutBlockInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput;

  @Field(() => UsersUpdateWithoutBlockInput, { nullable: false })
  @Type(() => UsersUpdateWithoutBlockInput)
  data!: UsersUpdateWithoutBlockInput;
}
