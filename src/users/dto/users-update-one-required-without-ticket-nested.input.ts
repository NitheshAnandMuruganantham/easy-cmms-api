import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutTicketInput } from './users-create-without-ticket.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutTicketInput } from './users-create-or-connect-without-ticket.input';
import { UsersUpsertWithoutTicketInput } from './users-upsert-without-ticket.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateWithoutTicketInput } from './users-update-without-ticket.input';

@InputType()
export class UsersUpdateOneRequiredWithoutTicketNestedInput {
  @Field(() => UsersCreateWithoutTicketInput, { nullable: true })
  @Type(() => UsersCreateWithoutTicketInput)
  create?: UsersCreateWithoutTicketInput;

  @Field(() => UsersCreateOrConnectWithoutTicketInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutTicketInput)
  connectOrCreate?: UsersCreateOrConnectWithoutTicketInput;

  @Field(() => UsersUpsertWithoutTicketInput, { nullable: true })
  @Type(() => UsersUpsertWithoutTicketInput)
  upsert?: UsersUpsertWithoutTicketInput;

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: UsersWhereUniqueInput;

  @Field(() => UsersUpdateWithoutTicketInput, { nullable: true })
  @Type(() => UsersUpdateWithoutTicketInput)
  update?: UsersUpdateWithoutTicketInput;
}
