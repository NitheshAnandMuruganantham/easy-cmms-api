import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../../common-dto/prisma/string-field-update-operations.input';
import { BlockUpdateMailingsInput } from './block-update-mailings.input';
import { DateTimeFieldUpdateOperationsInput } from '../../../common-dto/prisma/date-time-field-update-operations.input';
import { UsersUncheckedUpdateManyWithoutBlockNestedInput } from '../../../users/dto/users-unchecked-update-many-without-block-nested.input';
import { block_settingsUncheckedUpdateManyWithoutBlockNestedInput } from '../block-settings/block-settings-unchecked-update-many-without-block-nested.input';
import { catagoryUncheckedUpdateManyWithoutBlockNestedInput } from '../../../items/catagory/catagory-unchecked-update-many-without-block-nested.input';
import { ItemsUncheckedUpdateManyWithoutBlockNestedInput } from '../../../items/items/items-unchecked-update-many-without-block-nested.input';
import { machine_catagoryUncheckedUpdateManyWithoutBlockNestedInput } from '../../../machine_catagory/dto/machine-catagory-unchecked-update-many-without-block-nested.input';
import { MaintenanceUncheckedUpdateManyWithoutBlockNestedInput } from '../../../maintanance/dto/maintenance-unchecked-update-many-without-block-nested.input';
import { ReplacementsUncheckedUpdateManyWithoutBlockNestedInput } from '../../../replacements/dto/replacements-unchecked-update-many-without-block-nested.input';
import { ReportsUncheckedUpdateManyWithoutBlockNestedInput } from '../../../report/dto/reports-unchecked-update-many-without-block-nested.input';
import { SectionsUncheckedUpdateManyWithoutBlockNestedInput } from '../../../section/dto/sections/sections-unchecked-update-many-without-block-nested.input';
import { TicketUncheckedUpdateManyWithoutBlockNestedInput } from '../../../ticket/dto/ticket-unchecked-update-many-without-block-nested.input';
import { routine_maintanancesUncheckedUpdateManyWithoutBlockNestedInput } from '../../../routine-maintanances/dto/routine-maintanances-unchecked-update-many-without-block-nested.input';
import { InvoicesUncheckedUpdateManyWithoutBlockNestedInput } from '../../../invoices/dto/invoices/invoices-unchecked-update-many-without-block-nested.input';
import { invoice_itemsUncheckedUpdateManyWithoutBlockNestedInput } from '../../../invoices/dto/invoice-items/invoice-items-unchecked-update-many-without-block-nested.input';

@InputType()
export class BlockUncheckedUpdateWithoutMachinesInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  location?: StringFieldUpdateOperationsInput;

  @Field(() => BlockUpdateMailingsInput, { nullable: true })
  Mailings?: BlockUpdateMailingsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UsersUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  Users?: UsersUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => block_settingsUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  block_settings?: block_settingsUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => catagoryUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  catagory?: catagoryUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => ItemsUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  Items?: ItemsUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => machine_catagoryUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  machine_catagory?: machine_catagoryUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => MaintenanceUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  Maintenance?: MaintenanceUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => ReplacementsUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  Replacements?: ReplacementsUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => ReportsUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  Reports?: ReportsUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => SectionsUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  Sections?: SectionsUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => TicketUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  Ticket?: TicketUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => routine_maintanancesUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  routine_maintanances?: routine_maintanancesUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => InvoicesUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  Invoices?: InvoicesUncheckedUpdateManyWithoutBlockNestedInput;

  @Field(() => invoice_itemsUncheckedUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  invoice_items?: invoice_itemsUncheckedUpdateManyWithoutBlockNestedInput;
}
