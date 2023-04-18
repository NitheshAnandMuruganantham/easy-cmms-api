import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { Enumticket_statusFieldUpdateOperationsInput } from '../prisma/enumticket-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutTicketNestedInput } from '../users/users-update-one-required-without-ticket-nested.input';
import { HideField } from '@nestjs/graphql';
import { MaintenanceUpdateOneWithoutTicketNestedInput } from '../maintenance/maintenance-update-one-without-ticket-nested.input';
import { BlockUpdateOneRequiredWithoutTicketNestedInput } from '../block/block-update-one-required-without-ticket-nested.input';

@InputType()
export class TicketUpdateWithoutMachinesInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    photos?: StringFieldUpdateOperationsInput;

    @Field(() => Enumticket_statusFieldUpdateOperationsInput, {nullable:true})
    status?: Enumticket_statusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    user?: UsersUpdateOneRequiredWithoutTicketNestedInput;

    @Field(() => MaintenanceUpdateOneWithoutTicketNestedInput, {nullable:true})
    maintenance?: MaintenanceUpdateOneWithoutTicketNestedInput;

    @HideField()
    block?: BlockUpdateOneRequiredWithoutTicketNestedInput;
}
