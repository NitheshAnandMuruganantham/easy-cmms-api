import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutMaintenanceNestedInput } from '../users/users-update-one-required-without-maintenance-nested.input';
import { ReplacementsUpdateManyWithoutMaintenanceNestedInput } from '../replacements/replacements-update-many-without-maintenance-nested.input';
import { ReportsUpdateManyWithoutMaintenanceNestedInput } from '../reports/reports-update-many-without-maintenance-nested.input';
import { TicketUpdateOneWithoutMaintenanceNestedInput } from '../ticket/ticket-update-one-without-maintenance-nested.input';

@InputType()
export class MaintenanceUpdateWithoutMachinesInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    photo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    from?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    to?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    resolved?: BoolFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    un_planned?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    elapsed?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UsersUpdateOneRequiredWithoutMaintenanceNestedInput, {nullable:true})
    assignee?: UsersUpdateOneRequiredWithoutMaintenanceNestedInput;

    @Field(() => ReplacementsUpdateManyWithoutMaintenanceNestedInput, {nullable:true})
    replacements?: ReplacementsUpdateManyWithoutMaintenanceNestedInput;

    @Field(() => ReportsUpdateManyWithoutMaintenanceNestedInput, {nullable:true})
    reports?: ReportsUpdateManyWithoutMaintenanceNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TicketUpdateOneWithoutMaintenanceNestedInput, {nullable:true})
    ticket?: TicketUpdateOneWithoutMaintenanceNestedInput;
}
