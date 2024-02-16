import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutTicketInput } from './users-create-without-ticket.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutTicketInput } from './users-create-or-connect-without-ticket.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutTicketInput {
  @Field(() => UsersCreateWithoutTicketInput, { nullable: true })
  @Type(() => UsersCreateWithoutTicketInput)
  create?: UsersCreateWithoutTicketInput;

  @Field(() => UsersCreateOrConnectWithoutTicketInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutTicketInput)
  connectOrCreate?: UsersCreateOrConnectWithoutTicketInput;

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: UsersWhereUniqueInput;
}
