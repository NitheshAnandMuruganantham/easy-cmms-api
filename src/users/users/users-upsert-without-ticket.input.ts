import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersUpdateWithoutTicketInput } from './users-update-without-ticket.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutTicketInput } from './users-create-without-ticket.input';

@InputType()
export class UsersUpsertWithoutTicketInput {

    @Field(() => UsersUpdateWithoutTicketInput, {nullable:false})
    @Type(() => UsersUpdateWithoutTicketInput)
    update!: UsersUpdateWithoutTicketInput;

    @Field(() => UsersCreateWithoutTicketInput, {nullable:false})
    @Type(() => UsersCreateWithoutTicketInput)
    create!: UsersCreateWithoutTicketInput;
}
