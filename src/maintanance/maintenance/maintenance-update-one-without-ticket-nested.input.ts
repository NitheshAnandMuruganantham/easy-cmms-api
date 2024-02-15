import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutTicketInput } from './maintenance-create-without-ticket.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutTicketInput } from './maintenance-create-or-connect-without-ticket.input';
import { MaintenanceUpsertWithoutTicketInput } from './maintenance-upsert-without-ticket.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { MaintenanceUpdateWithoutTicketInput } from './maintenance-update-without-ticket.input';

@InputType()
export class MaintenanceUpdateOneWithoutTicketNestedInput {

    @Field(() => MaintenanceCreateWithoutTicketInput, {nullable:true})
    @Type(() => MaintenanceCreateWithoutTicketInput)
    create?: MaintenanceCreateWithoutTicketInput;

    @Field(() => MaintenanceCreateOrConnectWithoutTicketInput, {nullable:true})
    @Type(() => MaintenanceCreateOrConnectWithoutTicketInput)
    connectOrCreate?: MaintenanceCreateOrConnectWithoutTicketInput;

    @Field(() => MaintenanceUpsertWithoutTicketInput, {nullable:true})
    @Type(() => MaintenanceUpsertWithoutTicketInput)
    upsert?: MaintenanceUpsertWithoutTicketInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MaintenanceWhereUniqueInput, {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    connect?: MaintenanceWhereUniqueInput;

    @Field(() => MaintenanceUpdateWithoutTicketInput, {nullable:true})
    @Type(() => MaintenanceUpdateWithoutTicketInput)
    update?: MaintenanceUpdateWithoutTicketInput;
}
