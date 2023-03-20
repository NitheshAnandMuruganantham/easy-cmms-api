import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaintenanceUncheckedUpdateManyWithoutMachinesNestedInput } from '../maintenance/maintenance-unchecked-update-many-without-machines-nested.input';
import { TicketUncheckedUpdateManyWithoutMachinesNestedInput } from '../ticket/ticket-unchecked-update-many-without-machines-nested.input';
import { routine_maintanancesUncheckedUpdateManyWithoutMeachineNestedInput } from '../routine-maintanances/routine-maintanances-unchecked-update-many-without-meachine-nested.input';

@InputType()
export class MachinesUncheckedUpdateWithoutSectionInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    block_id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    label?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    profile?: any;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priority?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    machine_catagory_id?: BigIntFieldUpdateOperationsInput;

    @Field(() => MaintenanceUncheckedUpdateManyWithoutMachinesNestedInput, {nullable:true})
    maintenance?: MaintenanceUncheckedUpdateManyWithoutMachinesNestedInput;

    @Field(() => TicketUncheckedUpdateManyWithoutMachinesNestedInput, {nullable:true})
    Ticket?: TicketUncheckedUpdateManyWithoutMachinesNestedInput;

    @Field(() => routine_maintanancesUncheckedUpdateManyWithoutMeachineNestedInput, {nullable:true})
    routine_maintanances?: routine_maintanancesUncheckedUpdateManyWithoutMeachineNestedInput;
}
