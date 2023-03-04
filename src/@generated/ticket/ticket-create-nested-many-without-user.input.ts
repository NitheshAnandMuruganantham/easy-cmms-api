import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutUserInput } from './ticket-create-without-user.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutUserInput } from './ticket-create-or-connect-without-user.input';
import { TicketCreateManyUserInputEnvelope } from './ticket-create-many-user-input-envelope.input';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';

@InputType()
export class TicketCreateNestedManyWithoutUserInput {

    @Field(() => [TicketCreateWithoutUserInput], {nullable:true})
    @Type(() => TicketCreateWithoutUserInput)
    create?: Array<TicketCreateWithoutUserInput>;

    @Field(() => [TicketCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutUserInput>;

    @Field(() => TicketCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyUserInputEnvelope)
    createMany?: TicketCreateManyUserInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<TicketWhereUniqueInput>;
}
