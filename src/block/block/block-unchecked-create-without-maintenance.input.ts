import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { BlockCreateMailingsInput } from './block-create-mailings.input';
import { MachinesUncheckedCreateNestedManyWithoutBlockInput } from '../../machines/machines/machines-unchecked-create-nested-many-without-block.input';
import { UsersUncheckedCreateNestedManyWithoutBlockInput } from '../../users/users/users-unchecked-create-nested-many-without-block.input';
import { block_settingsUncheckedCreateNestedManyWithoutBlockInput } from '../block-settings/block-settings-unchecked-create-nested-many-without-block.input';
import { catagoryUncheckedCreateNestedManyWithoutBlockInput } from '../../common-dto/catagory/catagory-unchecked-create-nested-many-without-block.input';
import { ItemsUncheckedCreateNestedManyWithoutBlockInput } from '../../items/items/items-unchecked-create-nested-many-without-block.input';
import { machine_catagoryUncheckedCreateNestedManyWithoutBlockInput } from '../../machine_catagory/machine-catagory/machine-catagory-unchecked-create-nested-many-without-block.input';
import { ReplacementsUncheckedCreateNestedManyWithoutBlockInput } from '../../replacements/replacements/replacements-unchecked-create-nested-many-without-block.input';
import { ReportsUncheckedCreateNestedManyWithoutBlockInput } from '../../report/reports/reports-unchecked-create-nested-many-without-block.input';
import { SectionsUncheckedCreateNestedManyWithoutBlockInput } from '../../section/sections/sections-unchecked-create-nested-many-without-block.input';
import { TicketUncheckedCreateNestedManyWithoutBlockInput } from '../../ticket/ticket/ticket-unchecked-create-nested-many-without-block.input';
import { routine_maintanancesUncheckedCreateNestedManyWithoutBlockInput } from '../../routine-maintanances/routine-maintanances/routine-maintanances-unchecked-create-nested-many-without-block.input';
import { InvoicesUncheckedCreateNestedManyWithoutBlockInput } from '../../invoices/invoices/invoices-unchecked-create-nested-many-without-block.input';
import { invoice_itemsUncheckedCreateNestedManyWithoutBlockInput } from '../../invoices/invoice-items/invoice-items-unchecked-create-nested-many-without-block.input';

@InputType()
export class BlockUncheckedCreateWithoutMaintenanceInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  location!: string;

  @Field(() => BlockCreateMailingsInput, { nullable: true })
  Mailings?: BlockCreateMailingsInput;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => MachinesUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  machines?: MachinesUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => UsersUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  Users?: UsersUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => block_settingsUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  block_settings?: block_settingsUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => catagoryUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  catagory?: catagoryUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => ItemsUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  Items?: ItemsUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => machine_catagoryUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  machine_catagory?: machine_catagoryUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => ReplacementsUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  Replacements?: ReplacementsUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => ReportsUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  Reports?: ReportsUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => SectionsUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  Sections?: SectionsUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => TicketUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  Ticket?: TicketUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => routine_maintanancesUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  routine_maintanances?: routine_maintanancesUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => InvoicesUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  Invoices?: InvoicesUncheckedCreateNestedManyWithoutBlockInput;

  @Field(() => invoice_itemsUncheckedCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutBlockInput;
}