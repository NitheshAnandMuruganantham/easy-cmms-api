import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutTicketInput } from './maintenance-create-without-ticket.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutTicketInput } from './maintenance-create-or-connect-without-ticket.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';

@InputType()
export class MaintenanceCreateNestedOneWithoutTicketInput {

    @Field(() => MaintenanceCreateWithoutTicketInput, {nullable:true})
    @Type(() => MaintenanceCreateWithoutTicketInput)
    create?: MaintenanceCreateWithoutTicketInput;

    @Field(() => MaintenanceCreateOrConnectWithoutTicketInput, {nullable:true})
    @Type(() => MaintenanceCreateOrConnectWithoutTicketInput)
    connectOrCreate?: MaintenanceCreateOrConnectWithoutTicketInput;

    @Field(() => MaintenanceWhereUniqueInput, {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    connect?: MaintenanceWhereUniqueInput;
}
