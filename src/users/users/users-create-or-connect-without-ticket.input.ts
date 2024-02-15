import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutTicketInput } from './users-create-without-ticket.input';

@InputType()
export class UsersCreateOrConnectWithoutTicketInput {

    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: UsersWhereUniqueInput;

    @Field(() => UsersCreateWithoutTicketInput, {nullable:false})
    @Type(() => UsersCreateWithoutTicketInput)
    create!: UsersCreateWithoutTicketInput;
}
