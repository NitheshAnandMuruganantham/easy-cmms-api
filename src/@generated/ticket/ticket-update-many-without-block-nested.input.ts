import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutBlockInput } from './ticket-create-without-block.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutBlockInput } from './ticket-create-or-connect-without-block.input';
import { TicketUpsertWithWhereUniqueWithoutBlockInput } from './ticket-upsert-with-where-unique-without-block.input';
import { TicketCreateManyBlockInputEnvelope } from './ticket-create-many-block-input-envelope.input';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { TicketUpdateWithWhereUniqueWithoutBlockInput } from './ticket-update-with-where-unique-without-block.input';
import { TicketUpdateManyWithWhereWithoutBlockInput } from './ticket-update-many-with-where-without-block.input';
import { TicketScalarWhereInput } from './ticket-scalar-where.input';

@InputType()
export class TicketUpdateManyWithoutBlockNestedInput {

    @Field(() => [TicketCreateWithoutBlockInput], {nullable:true})
    @Type(() => TicketCreateWithoutBlockInput)
    create?: Array<TicketCreateWithoutBlockInput>;

    @Field(() => [TicketCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutBlockInput>;

    @Field(() => [TicketUpsertWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => TicketUpsertWithWhereUniqueWithoutBlockInput)
    upsert?: Array<TicketUpsertWithWhereUniqueWithoutBlockInput>;

    @Field(() => TicketCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyBlockInputEnvelope)
    createMany?: TicketCreateManyBlockInputEnvelope;

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

    @Field(() => [TicketUpdateWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => TicketUpdateWithWhereUniqueWithoutBlockInput)
    update?: Array<TicketUpdateWithWhereUniqueWithoutBlockInput>;

    @Field(() => [TicketUpdateManyWithWhereWithoutBlockInput], {nullable:true})
    @Type(() => TicketUpdateManyWithWhereWithoutBlockInput)
    updateMany?: Array<TicketUpdateManyWithWhereWithoutBlockInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    @Type(() => TicketScalarWhereInput)
    deleteMany?: Array<TicketScalarWhereInput>;
}
