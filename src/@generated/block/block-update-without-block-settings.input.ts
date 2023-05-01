import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BlockUpdateMailingsInput } from './block-update-mailings.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MachinesUpdateManyWithoutBlockNestedInput } from '../machines/machines-update-many-without-block-nested.input';
import { UsersUpdateManyWithoutBlockNestedInput } from '../users/users-update-many-without-block-nested.input';
import { production_dataUpdateManyWithoutBlockNestedInput } from '../production-data/production-data-update-many-without-block-nested.input';
import { catagoryUpdateManyWithoutBlockNestedInput } from '../catagory/catagory-update-many-without-block-nested.input';
import { ItemsUpdateManyWithoutBlockNestedInput } from '../items/items-update-many-without-block-nested.input';
import { machine_catagoryUpdateManyWithoutBlockNestedInput } from '../machine-catagory/machine-catagory-update-many-without-block-nested.input';
import { MaintenanceUpdateManyWithoutBlockNestedInput } from '../maintenance/maintenance-update-many-without-block-nested.input';
import { ReplacementsUpdateManyWithoutBlockNestedInput } from '../replacements/replacements-update-many-without-block-nested.input';
import { ReportsUpdateManyWithoutBlockNestedInput } from '../reports/reports-update-many-without-block-nested.input';
import { SectionsUpdateManyWithoutBlockNestedInput } from '../sections/sections-update-many-without-block-nested.input';
import { TicketUpdateManyWithoutBlockNestedInput } from '../ticket/ticket-update-many-without-block-nested.input';
import { routine_maintanancesUpdateManyWithoutBlockNestedInput } from '../routine-maintanances/routine-maintanances-update-many-without-block-nested.input';
import { InvoicesUpdateManyWithoutBlockNestedInput } from '../invoices/invoices-update-many-without-block-nested.input';
import { invoice_itemsUpdateManyWithoutBlockNestedInput } from '../invoice-items/invoice-items-update-many-without-block-nested.input';

@InputType()
export class BlockUpdateWithoutBlock_settingsInput {

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

    @Field(() => MachinesUpdateManyWithoutBlockNestedInput, {nullable:true})
    machines?: MachinesUpdateManyWithoutBlockNestedInput;

    @Field(() => UsersUpdateManyWithoutBlockNestedInput, {nullable:true})
    Users?: UsersUpdateManyWithoutBlockNestedInput;

    @Field(() => production_dataUpdateManyWithoutBlockNestedInput, {nullable:true})
    production_data?: production_dataUpdateManyWithoutBlockNestedInput;

    @Field(() => catagoryUpdateManyWithoutBlockNestedInput, {nullable:true})
    catagory?: catagoryUpdateManyWithoutBlockNestedInput;

    @Field(() => ItemsUpdateManyWithoutBlockNestedInput, {nullable:true})
    Items?: ItemsUpdateManyWithoutBlockNestedInput;

    @Field(() => machine_catagoryUpdateManyWithoutBlockNestedInput, {nullable:true})
    machine_catagory?: machine_catagoryUpdateManyWithoutBlockNestedInput;

    @Field(() => MaintenanceUpdateManyWithoutBlockNestedInput, {nullable:true})
    Maintenance?: MaintenanceUpdateManyWithoutBlockNestedInput;

    @Field(() => ReplacementsUpdateManyWithoutBlockNestedInput, {nullable:true})
    Replacements?: ReplacementsUpdateManyWithoutBlockNestedInput;

    @Field(() => ReportsUpdateManyWithoutBlockNestedInput, {nullable:true})
    Reports?: ReportsUpdateManyWithoutBlockNestedInput;

    @Field(() => SectionsUpdateManyWithoutBlockNestedInput, {nullable:true})
    Sections?: SectionsUpdateManyWithoutBlockNestedInput;

    @Field(() => TicketUpdateManyWithoutBlockNestedInput, {nullable:true})
    Ticket?: TicketUpdateManyWithoutBlockNestedInput;

    @Field(() => routine_maintanancesUpdateManyWithoutBlockNestedInput, {nullable:true})
    routine_maintanances?: routine_maintanancesUpdateManyWithoutBlockNestedInput;

    @Field(() => InvoicesUpdateManyWithoutBlockNestedInput, {nullable:true})
    Invoices?: InvoicesUpdateManyWithoutBlockNestedInput;

    @Field(() => invoice_itemsUpdateManyWithoutBlockNestedInput, {nullable:true})
    invoice_items?: invoice_itemsUpdateManyWithoutBlockNestedInput;
}
