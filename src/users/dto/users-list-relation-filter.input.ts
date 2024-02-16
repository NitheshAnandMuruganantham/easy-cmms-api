import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereInput } from './users-where.input';

@InputType()
export class UsersListRelationFilter {
  @Field(() => UsersWhereInput, { nullable: true })
  every?: UsersWhereInput;

  @Field(() => UsersWhereInput, { nullable: true })
  some?: UsersWhereInput;

  @Field(() => UsersWhereInput, { nullable: true })
  none?: UsersWhereInput;
}
