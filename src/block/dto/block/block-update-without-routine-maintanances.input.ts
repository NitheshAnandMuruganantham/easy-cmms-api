import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../../common-dto/prisma/string-field-update-operations.input';
import { BlockUpdateMailingsInput } from './block-update-mailings.input';
import { DateTimeFieldUpdateOperationsInput } from '../../../common-dto/prisma/date-time-field-update-operations.input';
import { MachinesUpdateManyWithoutBlockNestedInput } from '../../../machines/dto/machines/machines-update-many-without-block-nested.input';
import { UsersUpdateManyWithoutBlockNestedInput } from '../../../users/dto/users-update-many-without-block-nested.input';
import { block_settingsUpdateManyWithoutBlockNestedInput } from '../block-settings/block-settings-update-many-without-block-nested.input';
import { catagoryUpdateManyWithoutBlockNestedInput } from '../../../items/catagory/catagory-update-many-without-block-nested.input';
import { ItemsUpdateManyWithoutBlockNestedInput } from '../../../items/items/items-update-many-without-block-nested.input';
import { machine_catagoryUpdateManyWithoutBlockNestedInput } from '../../../machine_catagory/dto/machine-catagory-update-many-without-block-nested.input';
import { MaintenanceUpdateManyWithoutBlockNestedInput } from '../../../maintanance/dto/maintenance-update-many-without-block-nested.input';
import { ReplacementsUpdateManyWithoutBlockNestedInput } from '../../../replacements/dto/replacements-update-many-without-block-nested.input';
import { ReportsUpdateManyWithoutBlockNestedInput } from '../../../report/dto/reports-update-many-without-block-nested.input';
import { SectionsUpdateManyWithoutBlockNestedInput } from '../../../section/dto/sections/sections-update-many-without-block-nested.input';
import { TicketUpdateManyWithoutBlockNestedInput } from '../../../ticket/dto/ticket-update-many-without-block-nested.input';
import { InvoicesUpdateManyWithoutBlockNestedInput } from '../../../invoices/dto/invoices/invoices-update-many-without-block-nested.input';
import { invoice_itemsUpdateManyWithoutBlockNestedInput } from '../../../invoices/dto/invoice-items/invoice-items-update-many-without-block-nested.input';

@InputType()
export class BlockUpdateWithoutRoutine_maintanancesInput {
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

  @Field(() => MachinesUpdateManyWithoutBlockNestedInput, { nullable: true })
  machines?: MachinesUpdateManyWithoutBlockNestedInput;

  @Field(() => UsersUpdateManyWithoutBlockNestedInput, { nullable: true })
  Users?: UsersUpdateManyWithoutBlockNestedInput;

  @Field(() => block_settingsUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  block_settings?: block_settingsUpdateManyWithoutBlockNestedInput;

  @Field(() => catagoryUpdateManyWithoutBlockNestedInput, { nullable: true })
  catagory?: catagoryUpdateManyWithoutBlockNestedInput;

  @Field(() => ItemsUpdateManyWithoutBlockNestedInput, { nullable: true })
  Items?: ItemsUpdateManyWithoutBlockNestedInput;

  @Field(() => machine_catagoryUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  machine_catagory?: machine_catagoryUpdateManyWithoutBlockNestedInput;

  @Field(() => MaintenanceUpdateManyWithoutBlockNestedInput, { nullable: true })
  Maintenance?: MaintenanceUpdateManyWithoutBlockNestedInput;

  @Field(() => ReplacementsUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  Replacements?: ReplacementsUpdateManyWithoutBlockNestedInput;

  @Field(() => ReportsUpdateManyWithoutBlockNestedInput, { nullable: true })
  Reports?: ReportsUpdateManyWithoutBlockNestedInput;

  @Field(() => SectionsUpdateManyWithoutBlockNestedInput, { nullable: true })
  Sections?: SectionsUpdateManyWithoutBlockNestedInput;

  @Field(() => TicketUpdateManyWithoutBlockNestedInput, { nullable: true })
  Ticket?: TicketUpdateManyWithoutBlockNestedInput;

  @Field(() => InvoicesUpdateManyWithoutBlockNestedInput, { nullable: true })
  Invoices?: InvoicesUpdateManyWithoutBlockNestedInput;

  @Field(() => invoice_itemsUpdateManyWithoutBlockNestedInput, {
    nullable: true,
  })
  invoice_items?: invoice_itemsUpdateManyWithoutBlockNestedInput;
}
