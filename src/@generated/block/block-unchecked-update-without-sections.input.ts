import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BlockUpdateMailingsInput } from './block-update-mailings.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MachinesUncheckedUpdateManyWithoutBlockNestedInput } from '../machines/machines-unchecked-update-many-without-block-nested.input';
import { UsersUncheckedUpdateManyWithoutBlockNestedInput } from '../users/users-unchecked-update-many-without-block-nested.input';
import { block_settingsUncheckedUpdateManyWithoutBlockNestedInput } from '../block-settings/block-settings-unchecked-update-many-without-block-nested.input';
import { catagoryUncheckedUpdateManyWithoutBlockNestedInput } from '../catagory/catagory-unchecked-update-many-without-block-nested.input';
import { ItemsUncheckedUpdateManyWithoutBlockNestedInput } from '../items/items-unchecked-update-many-without-block-nested.input';
import { machine_catagoryUncheckedUpdateManyWithoutBlockNestedInput } from '../machine-catagory/machine-catagory-unchecked-update-many-without-block-nested.input';
import { MaintenanceUncheckedUpdateManyWithoutBlockNestedInput } from '../maintenance/maintenance-unchecked-update-many-without-block-nested.input';
import { ReplacementsUncheckedUpdateManyWithoutBlockNestedInput } from '../replacements/replacements-unchecked-update-many-without-block-nested.input';
import { ReportsUncheckedUpdateManyWithoutBlockNestedInput } from '../reports/reports-unchecked-update-many-without-block-nested.input';
import { TicketUncheckedUpdateManyWithoutBlockNestedInput } from '../ticket/ticket-unchecked-update-many-without-block-nested.input';
import { routine_maintanancesUncheckedUpdateManyWithoutBlockNestedInput } from '../routine-maintanances/routine-maintanances-unchecked-update-many-without-block-nested.input';
import { InvoicesUncheckedUpdateManyWithoutBlockNestedInput } from '../invoices/invoices-unchecked-update-many-without-block-nested.input';
import { invoice_itemsUncheckedUpdateManyWithoutBlockNestedInput } from '../invoice-items/invoice-items-unchecked-update-many-without-block-nested.input';

@InputType()
export class BlockUncheckedUpdateWithoutSectionsInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    location?: StringFieldUpdateOperationsInput;

    @Field(() => BlockUpdateMailingsInput, {nullable:true})
    Mailings?: BlockUpdateMailingsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MachinesUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    machines?: MachinesUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => UsersUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Users?: UsersUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => block_settingsUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    block_settings?: block_settingsUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => catagoryUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    catagory?: catagoryUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => ItemsUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Items?: ItemsUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => machine_catagoryUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    machine_catagory?: machine_catagoryUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => MaintenanceUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Maintenance?: MaintenanceUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => ReplacementsUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Replacements?: ReplacementsUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => ReportsUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Reports?: ReportsUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => TicketUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Ticket?: TicketUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => routine_maintanancesUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    routine_maintanances?: routine_maintanancesUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => InvoicesUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Invoices?: InvoicesUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => invoice_itemsUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutBlockNestedInput;
}
