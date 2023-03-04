import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BlockUpdateOneRequiredWithoutMachinesNestedInput } from '../block/block-update-one-required-without-machines-nested.input';
import { SectionsUpdateOneRequiredWithoutMachinesNestedInput } from '../sections/sections-update-one-required-without-machines-nested.input';
import { MaintenanceUpdateManyWithoutMachinesNestedInput } from '../maintenance/maintenance-update-many-without-machines-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TicketUpdateManyWithoutMachinesNestedInput } from '../ticket/ticket-update-many-without-machines-nested.input';

@InputType()
export class MachinesUpdateWithoutRoutine_maintanancesInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    label?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    profile?: any;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priority?: IntFieldUpdateOperationsInput;

    @Field(() => BlockUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    block?: BlockUpdateOneRequiredWithoutMachinesNestedInput;

    @Field(() => SectionsUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    section?: SectionsUpdateOneRequiredWithoutMachinesNestedInput;

    @Field(() => MaintenanceUpdateManyWithoutMachinesNestedInput, {nullable:true})
    maintenance?: MaintenanceUpdateManyWithoutMachinesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TicketUpdateManyWithoutMachinesNestedInput, {nullable:true})
    Ticket?: TicketUpdateManyWithoutMachinesNestedInput;
}
