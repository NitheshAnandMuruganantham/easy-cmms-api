import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { BlockCreateMailingsInput } from './block-create-mailings.input';
import { MachinesCreateNestedManyWithoutBlockInput } from '../../../machines/dto/machines/machines-create-nested-many-without-block.input';
import { UsersCreateNestedManyWithoutBlockInput } from '../../../users/dto/users-create-nested-many-without-block.input';
import { block_settingsCreateNestedManyWithoutBlockInput } from '../block-settings/block-settings-create-nested-many-without-block.input';
import { catagoryCreateNestedManyWithoutBlockInput } from '../../../items/catagory/catagory-create-nested-many-without-block.input';
import { ItemsCreateNestedManyWithoutBlockInput } from '../../../items/items/items-create-nested-many-without-block.input';
import { machine_catagoryCreateNestedManyWithoutBlockInput } from '../../../machine_catagory/dto/machine-catagory-create-nested-many-without-block.input';
import { MaintenanceCreateNestedManyWithoutBlockInput } from '../../../maintanance/dto/maintenance-create-nested-many-without-block.input';
import { ReplacementsCreateNestedManyWithoutBlockInput } from '../../../replacements/dto/replacements-create-nested-many-without-block.input';
import { ReportsCreateNestedManyWithoutBlockInput } from '../../../report/dto/reports-create-nested-many-without-block.input';
import { SectionsCreateNestedManyWithoutBlockInput } from '../../../section/dto/sections/sections-create-nested-many-without-block.input';
import { TicketCreateNestedManyWithoutBlockInput } from '../../../ticket/dto/ticket-create-nested-many-without-block.input';
import { routine_maintanancesCreateNestedManyWithoutBlockInput } from '../../../routine-maintanances/dto/routine-maintanances-create-nested-many-without-block.input';
import { InvoicesCreateNestedManyWithoutBlockInput } from '../../../invoices/dto/invoices/invoices-create-nested-many-without-block.input';
import { invoice_itemsCreateNestedManyWithoutBlockInput } from '../../../invoices/dto/invoice-items/invoice-items-create-nested-many-without-block.input';

@InputType()
export class BlockCreateWithoutProduction_dataInput {
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

  @Field(() => MachinesCreateNestedManyWithoutBlockInput, { nullable: true })
  machines?: MachinesCreateNestedManyWithoutBlockInput;

  @Field(() => UsersCreateNestedManyWithoutBlockInput, { nullable: true })
  Users?: UsersCreateNestedManyWithoutBlockInput;

  @Field(() => block_settingsCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  block_settings?: block_settingsCreateNestedManyWithoutBlockInput;

  @Field(() => catagoryCreateNestedManyWithoutBlockInput, { nullable: true })
  catagory?: catagoryCreateNestedManyWithoutBlockInput;

  @Field(() => ItemsCreateNestedManyWithoutBlockInput, { nullable: true })
  Items?: ItemsCreateNestedManyWithoutBlockInput;

  @Field(() => machine_catagoryCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  machine_catagory?: machine_catagoryCreateNestedManyWithoutBlockInput;

  @Field(() => MaintenanceCreateNestedManyWithoutBlockInput, { nullable: true })
  Maintenance?: MaintenanceCreateNestedManyWithoutBlockInput;

  @Field(() => ReplacementsCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  Replacements?: ReplacementsCreateNestedManyWithoutBlockInput;

  @Field(() => ReportsCreateNestedManyWithoutBlockInput, { nullable: true })
  Reports?: ReportsCreateNestedManyWithoutBlockInput;

  @Field(() => SectionsCreateNestedManyWithoutBlockInput, { nullable: true })
  Sections?: SectionsCreateNestedManyWithoutBlockInput;

  @Field(() => TicketCreateNestedManyWithoutBlockInput, { nullable: true })
  Ticket?: TicketCreateNestedManyWithoutBlockInput;

  @Field(() => routine_maintanancesCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  routine_maintanances?: routine_maintanancesCreateNestedManyWithoutBlockInput;

  @Field(() => InvoicesCreateNestedManyWithoutBlockInput, { nullable: true })
  Invoices?: InvoicesCreateNestedManyWithoutBlockInput;

  @Field(() => invoice_itemsCreateNestedManyWithoutBlockInput, {
    nullable: true,
  })
  invoice_items?: invoice_itemsCreateNestedManyWithoutBlockInput;
}
