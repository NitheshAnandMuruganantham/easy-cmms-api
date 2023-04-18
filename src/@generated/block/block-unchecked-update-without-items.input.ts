import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BlockUpdateMailingsInput } from './block-update-mailings.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MachinesUncheckedUpdateManyWithoutBlockNestedInput } from '../machines/machines-unchecked-update-many-without-block-nested.input';
import { UsersUncheckedUpdateManyWithoutBlockNestedInput } from '../users/users-unchecked-update-many-without-block-nested.input';
import { block_settingsUncheckedUpdateManyWithoutBlockNestedInput } from '../block-settings/block-settings-unchecked-update-many-without-block-nested.input';
import { production_dataUncheckedUpdateManyWithoutBlockNestedInput } from '../production-data/production-data-unchecked-update-many-without-block-nested.input';
import { catagoryUncheckedUpdateManyWithoutBlockNestedInput } from '../catagory/catagory-unchecked-update-many-without-block-nested.input';
import { machine_catagoryUncheckedUpdateManyWithoutBlockNestedInput } from '../machine-catagory/machine-catagory-unchecked-update-many-without-block-nested.input';
import { MaintenanceUncheckedUpdateManyWithoutBlockNestedInput } from '../maintenance/maintenance-unchecked-update-many-without-block-nested.input';
import { ReplacementsUncheckedUpdateManyWithoutBlockNestedInput } from '../replacements/replacements-unchecked-update-many-without-block-nested.input';
import { ReportsUncheckedUpdateManyWithoutBlockNestedInput } from '../reports/reports-unchecked-update-many-without-block-nested.input';
import { SectionsUncheckedUpdateManyWithoutBlockNestedInput } from '../sections/sections-unchecked-update-many-without-block-nested.input';
import { TicketUncheckedUpdateManyWithoutBlockNestedInput } from '../ticket/ticket-unchecked-update-many-without-block-nested.input';
import { routine_maintanancesUncheckedUpdateManyWithoutBlockNestedInput } from '../routine-maintanances/routine-maintanances-unchecked-update-many-without-block-nested.input';
import { machines_itemsUncheckedUpdateManyWithoutBlockNestedInput } from '../machines-items/machines-items-unchecked-update-many-without-block-nested.input';

@InputType()
export class BlockUncheckedUpdateWithoutItemsInput {

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

    @Field(() => production_dataUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    production_data?: production_dataUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => catagoryUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    catagory?: catagoryUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => machine_catagoryUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    machine_catagory?: machine_catagoryUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => MaintenanceUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Maintenance?: MaintenanceUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => ReplacementsUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Replacements?: ReplacementsUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => ReportsUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Reports?: ReportsUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => SectionsUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Sections?: SectionsUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => TicketUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    Ticket?: TicketUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => routine_maintanancesUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    routine_maintanances?: routine_maintanancesUncheckedUpdateManyWithoutBlockNestedInput;

    @Field(() => machines_itemsUncheckedUpdateManyWithoutBlockNestedInput, {nullable:true})
    machines_items?: machines_itemsUncheckedUpdateManyWithoutBlockNestedInput;
}
