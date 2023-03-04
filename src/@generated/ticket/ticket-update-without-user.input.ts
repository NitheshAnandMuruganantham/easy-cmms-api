import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MaintenanceUpdateOneWithoutTicketNestedInput } from '../maintenance/maintenance-update-one-without-ticket-nested.input';
import { MachinesUpdateOneRequiredWithoutTicketNestedInput } from '../machines/machines-update-one-required-without-ticket-nested.input';
import { Enumticket_statusFieldUpdateOperationsInput } from '../prisma/enumticket-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class TicketUpdateWithoutUserInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    photos?: StringFieldUpdateOperationsInput;

    @Field(() => MaintenanceUpdateOneWithoutTicketNestedInput, {nullable:true})
    maintenance?: MaintenanceUpdateOneWithoutTicketNestedInput;

    @Field(() => MachinesUpdateOneRequiredWithoutTicketNestedInput, {nullable:true})
    machines?: MachinesUpdateOneRequiredWithoutTicketNestedInput;

    @Field(() => Enumticket_statusFieldUpdateOperationsInput, {nullable:true})
    status?: Enumticket_statusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
