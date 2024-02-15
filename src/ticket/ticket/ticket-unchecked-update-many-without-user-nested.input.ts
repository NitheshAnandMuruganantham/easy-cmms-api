import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutUserInput } from './ticket-create-without-user.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutUserInput } from './ticket-create-or-connect-without-user.input';
import { TicketUpsertWithWhereUniqueWithoutUserInput } from './ticket-upsert-with-where-unique-without-user.input';
import { TicketCreateManyUserInputEnvelope } from './ticket-create-many-user-input-envelope.input';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { TicketUpdateWithWhereUniqueWithoutUserInput } from './ticket-update-with-where-unique-without-user.input';
import { TicketUpdateManyWithWhereWithoutUserInput } from './ticket-update-many-with-where-without-user.input';
import { TicketScalarWhereInput } from './ticket-scalar-where.input';

@InputType()
export class TicketUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [TicketCreateWithoutUserInput], {nullable:true})
    @Type(() => TicketCreateWithoutUserInput)
    create?: Array<TicketCreateWithoutUserInput>;

    @Field(() => [TicketCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutUserInput>;

    @Field(() => [TicketUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TicketUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<TicketUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => TicketCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyUserInputEnvelope)
    createMany?: TicketCreateManyUserInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    set?: Array<TicketWhereUniqueInput>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    disconnect?: Array<TicketWhereUniqueInput>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    delete?: Array<TicketWhereUniqueInput>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<TicketWhereUniqueInput>;

    @Field(() => [TicketUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TicketUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<TicketUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [TicketUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => TicketUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<TicketUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    @Type(() => TicketScalarWhereInput)
    deleteMany?: Array<TicketScalarWhereInput>;
}
