import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { BlockCreateMailingsInput } from './block-create-mailings.input';
import { MachinesUncheckedCreateNestedManyWithoutBlockInput } from '../machines/machines-unchecked-create-nested-many-without-block.input';
import { UsersUncheckedCreateNestedManyWithoutBlockInput } from '../users/users-unchecked-create-nested-many-without-block.input';
import { block_settingsUncheckedCreateNestedManyWithoutBlockInput } from '../block-settings/block-settings-unchecked-create-nested-many-without-block.input';
import { production_dataUncheckedCreateNestedManyWithoutBlockInput } from '../production-data/production-data-unchecked-create-nested-many-without-block.input';
import { catagoryUncheckedCreateNestedManyWithoutBlockInput } from '../catagory/catagory-unchecked-create-nested-many-without-block.input';
import { ItemsUncheckedCreateNestedManyWithoutBlockInput } from '../items/items-unchecked-create-nested-many-without-block.input';
import { machine_catagoryUncheckedCreateNestedManyWithoutBlockInput } from '../machine-catagory/machine-catagory-unchecked-create-nested-many-without-block.input';
import { MaintenanceUncheckedCreateNestedManyWithoutBlockInput } from '../maintenance/maintenance-unchecked-create-nested-many-without-block.input';
import { ReplacementsUncheckedCreateNestedManyWithoutBlockInput } from '../replacements/replacements-unchecked-create-nested-many-without-block.input';
import { ReportsUncheckedCreateNestedManyWithoutBlockInput } from '../reports/reports-unchecked-create-nested-many-without-block.input';
import { SectionsUncheckedCreateNestedManyWithoutBlockInput } from '../sections/sections-unchecked-create-nested-many-without-block.input';
import { TicketUncheckedCreateNestedManyWithoutBlockInput } from '../ticket/ticket-unchecked-create-nested-many-without-block.input';
import { routine_maintanancesUncheckedCreateNestedManyWithoutBlockInput } from '../routine-maintanances/routine-maintanances-unchecked-create-nested-many-without-block.input';
import { InvoicesUncheckedCreateNestedManyWithoutBlockInput } from '../invoices/invoices-unchecked-create-nested-many-without-block.input';
import { invoice_itemsUncheckedCreateNestedManyWithoutBlockInput } from '../invoice-items/invoice-items-unchecked-create-nested-many-without-block.input';

@InputType()
export class BlockUncheckedCreateInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => BlockCreateMailingsInput, {nullable:true})
    Mailings?: BlockCreateMailingsInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => MachinesUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    machines?: MachinesUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => UsersUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    Users?: UsersUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => block_settingsUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    block_settings?: block_settingsUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => production_dataUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    production_data?: production_dataUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => catagoryUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    catagory?: catagoryUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => ItemsUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    Items?: ItemsUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => machine_catagoryUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    machine_catagory?: machine_catagoryUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => MaintenanceUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    Maintenance?: MaintenanceUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => ReplacementsUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    Replacements?: ReplacementsUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => ReportsUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    Reports?: ReportsUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => SectionsUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    Sections?: SectionsUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => TicketUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    Ticket?: TicketUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => routine_maintanancesUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    routine_maintanances?: routine_maintanancesUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => InvoicesUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutBlockInput;

    @Field(() => invoice_itemsUncheckedCreateNestedManyWithoutBlockInput, {nullable:true})
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutBlockInput;
}
