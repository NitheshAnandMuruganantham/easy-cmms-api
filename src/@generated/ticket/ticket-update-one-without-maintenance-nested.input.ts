import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutMaintenanceInput } from './ticket-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutMaintenanceInput } from './ticket-create-or-connect-without-maintenance.input';
import { TicketUpsertWithoutMaintenanceInput } from './ticket-upsert-without-maintenance.input';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { TicketUpdateWithoutMaintenanceInput } from './ticket-update-without-maintenance.input';

@InputType()
export class TicketUpdateOneWithoutMaintenanceNestedInput {

    @Field(() => TicketCreateWithoutMaintenanceInput, {nullable:true})
    @Type(() => TicketCreateWithoutMaintenanceInput)
    create?: TicketCreateWithoutMaintenanceInput;

    @Field(() => TicketCreateOrConnectWithoutMaintenanceInput, {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutMaintenanceInput)
    connectOrCreate?: TicketCreateOrConnectWithoutMaintenanceInput;

    @Field(() => TicketUpsertWithoutMaintenanceInput, {nullable:true})
    @Type(() => TicketUpsertWithoutMaintenanceInput)
    upsert?: TicketUpsertWithoutMaintenanceInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TicketWhereUniqueInput, {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: TicketWhereUniqueInput;

    @Field(() => TicketUpdateWithoutMaintenanceInput, {nullable:true})
    @Type(() => TicketUpdateWithoutMaintenanceInput)
    update?: TicketUpdateWithoutMaintenanceInput;
}
