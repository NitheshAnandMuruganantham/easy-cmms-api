import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { BlockCreateMailingsInput } from './block-create-mailings.input';
import { MachinesCreateNestedManyWithoutBlockInput } from '../machines/machines-create-nested-many-without-block.input';
import { UsersCreateNestedManyWithoutBlockInput } from '../users/users-create-nested-many-without-block.input';
import { block_settingsCreateNestedManyWithoutBlockInput } from '../block-settings/block-settings-create-nested-many-without-block.input';
import { catagoryCreateNestedManyWithoutBlockInput } from '../catagory/catagory-create-nested-many-without-block.input';
import { ItemsCreateNestedManyWithoutBlockInput } from '../items/items-create-nested-many-without-block.input';
import { MaintenanceCreateNestedManyWithoutBlockInput } from '../maintenance/maintenance-create-nested-many-without-block.input';
import { ReplacementsCreateNestedManyWithoutBlockInput } from '../replacements/replacements-create-nested-many-without-block.input';
import { ReportsCreateNestedManyWithoutBlockInput } from '../reports/reports-create-nested-many-without-block.input';
import { SectionsCreateNestedManyWithoutBlockInput } from '../sections/sections-create-nested-many-without-block.input';
import { TicketCreateNestedManyWithoutBlockInput } from '../ticket/ticket-create-nested-many-without-block.input';
import { routine_maintanancesCreateNestedManyWithoutBlockInput } from '../routine-maintanances/routine-maintanances-create-nested-many-without-block.input';
import { InvoicesCreateNestedManyWithoutBlockInput } from '../invoices/invoices-create-nested-many-without-block.input';
import { invoice_itemsCreateNestedManyWithoutBlockInput } from '../invoice-items/invoice-items-create-nested-many-without-block.input';

@InputType()
export class BlockCreateWithoutMachine_catagoryInput {

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

    @Field(() => MachinesCreateNestedManyWithoutBlockInput, {nullable:true})
    machines?: MachinesCreateNestedManyWithoutBlockInput;

    @Field(() => UsersCreateNestedManyWithoutBlockInput, {nullable:true})
    Users?: UsersCreateNestedManyWithoutBlockInput;

    @Field(() => block_settingsCreateNestedManyWithoutBlockInput, {nullable:true})
    block_settings?: block_settingsCreateNestedManyWithoutBlockInput;

    @Field(() => catagoryCreateNestedManyWithoutBlockInput, {nullable:true})
    catagory?: catagoryCreateNestedManyWithoutBlockInput;

    @Field(() => ItemsCreateNestedManyWithoutBlockInput, {nullable:true})
    Items?: ItemsCreateNestedManyWithoutBlockInput;

    @Field(() => MaintenanceCreateNestedManyWithoutBlockInput, {nullable:true})
    Maintenance?: MaintenanceCreateNestedManyWithoutBlockInput;

    @Field(() => ReplacementsCreateNestedManyWithoutBlockInput, {nullable:true})
    Replacements?: ReplacementsCreateNestedManyWithoutBlockInput;

    @Field(() => ReportsCreateNestedManyWithoutBlockInput, {nullable:true})
    Reports?: ReportsCreateNestedManyWithoutBlockInput;

    @Field(() => SectionsCreateNestedManyWithoutBlockInput, {nullable:true})
    Sections?: SectionsCreateNestedManyWithoutBlockInput;

    @Field(() => TicketCreateNestedManyWithoutBlockInput, {nullable:true})
    Ticket?: TicketCreateNestedManyWithoutBlockInput;

    @Field(() => routine_maintanancesCreateNestedManyWithoutBlockInput, {nullable:true})
    routine_maintanances?: routine_maintanancesCreateNestedManyWithoutBlockInput;

    @Field(() => InvoicesCreateNestedManyWithoutBlockInput, {nullable:true})
    Invoices?: InvoicesCreateNestedManyWithoutBlockInput;

    @Field(() => invoice_itemsCreateNestedManyWithoutBlockInput, {nullable:true})
    invoice_items?: invoice_itemsCreateNestedManyWithoutBlockInput;
}
