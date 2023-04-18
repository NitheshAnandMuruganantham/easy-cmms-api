import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutBlockInput } from './ticket-create-without-block.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutBlockInput } from './ticket-create-or-connect-without-block.input';
import { TicketCreateManyBlockInputEnvelope } from './ticket-create-many-block-input-envelope.input';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';

@InputType()
export class TicketUncheckedCreateNestedManyWithoutBlockInput {

    @Field(() => [TicketCreateWithoutBlockInput], {nullable:true})
    @Type(() => TicketCreateWithoutBlockInput)
    create?: Array<TicketCreateWithoutBlockInput>;

    @Field(() => [TicketCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutBlockInput>;

    @Field(() => TicketCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyBlockInputEnvelope)
    createMany?: TicketCreateManyBlockInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<TicketWhereUniqueInput>;
}
